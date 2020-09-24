import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from './utility';

@Injectable({
    providedIn: 'root'
})
export class DataLayerService {

    widgets: any[];
    constructor(
        private http: HttpClient
    ) { }


    getUsers() {
        return this.http.get<any[]>('/api/users');
    }
    getUser(id) {
        return this.http.get<any[]>('/api/users/'+id);
    }
    saveUser(cuser) {
        if(cuser.id) {
            return this.http.put<any[]>('/api/users/'+cuser.id, cuser);
        } else {
            cuser.id = Utils.genId();
            return this.http.post<any[]>('/api/users/', cuser);
        }
    }
    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/users/'+id);
    }
    getActivities(){
        return this.http.get<any[]>('/api/activities');
    }
    saveActivities(act){
        console.log('see act', act);
        if(act.id) {
            return this.http.put<any[]>('/api/activities/'+act.id, act);
        } else {
            act.id = Utils.genId();
            return this.http.post<any[]>('/api/activities/', act);
        }
    }


    getWidgets() {
        return this.http.get<any[]>('api/project');
    }
    
    // getWidgets(): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this.http.get('api/project')
    //             .subscribe((response: any) => {
    //                 this.widgets = response;
    //                 console.log('widget', response);
    //                 resolve(response);
    //             }, reject);
    //     });
    // }

}
