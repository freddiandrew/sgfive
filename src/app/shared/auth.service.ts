import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import { of, Observable } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import { DataLayerService } from './data-layer.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;

  constructor(private store: LocalStoreService, 
              private router: Router,
              private dl: DataLayerService
              ) {
    // this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
  }

  getuser() {
    return of({});
  }

  

  signin(credentials) {

    return this.dl.getUsers()


    
    // console.log('cred', credentials);
    
  }
  signout() {
    this.authenticated = false;
    this.store.setItem("ulogin", false);
    this.router.navigateByUrl("/auth/login");
  }

  
}
