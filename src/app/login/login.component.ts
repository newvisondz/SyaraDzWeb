import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/Authentification/authentification.service';
import { first } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  error : string = "";
  loading : boolean = false;


    constructor (   private auth:AuthentificationService,
                    private router:Router,
                    private _formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
      this.loginFormGroup = this._formBuilder.group({
        email : ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    onSubmit() {
      this.loading = true;
      this.auth.loginAll(this.loginFormGroup.controls['email'].value,this.loginFormGroup.controls['password'].value)
      .pipe(first()).subscribe(
          res => {
            if (res.token == undefined) {
              this.loading = false;
              console.log("Show Error feedback!");
            } else {
              window.localStorage.setItem("accesToken", res.token);
              if(res.type === "ADMIN"){
                window.localStorage.setItem("isSuperAdmin","true");
              }else if(res.isAdmin){
                window.localStorage.setItem("isAdmin","true");
                window.localStorage.setItem("manufacturer",res.manufacturer);
              }
              this.router.navigate(["/dashboard"]);
            }
          },
          err => {
            this.loading = false;
            this.error = err;
            console.log("Error occured : "+ err);
          }
        );
    }
}
