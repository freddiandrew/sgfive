import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { DataLayerService } from '../../../shared/data-layer.service';
import { AuthService } from '../../../shared/auth.service';
import { LocalStoreService } from 'app/shared/local-store.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    authenticated = false;
    loginForm: FormGroup;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private route: Router,
        private auth: AuthService,
        private dl: DataLayerService,
        private store: LocalStoreService,
        private _snackBar: MatSnackBar
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }


    ngOnInit(): void {
        this.loadForm();

    }
    loadForm() {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    goLogin(){
        console.log('this login', this.loginForm.value);
        const cred = this.loginForm.value ;
        const em = cred.email ;
        this.auth.signin(cred).subscribe(resp => {
            console.log('resp',resp) ; 
            const cuser = resp.filter( cu => cu.email == em);
            if(cuser.length > 0){
              console.log('user found', cuser);
              this.authenticated = true;
              this.store.setItem("ulogin", true);
              this.route.navigateByUrl('/home')
            } else {
              const msg = 'not user not Authorized' ;
              const act = "close" ;
              this.loginForm.reset();
              this.openSnackBar(msg,act)
              
            }
          });
       
        // this.route.navigateByUrl('/home');
    }
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 2000,
        });
      }

}
