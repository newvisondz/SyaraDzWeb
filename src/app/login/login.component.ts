import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/Authentification/authentification.service'
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    username: string = "";
    password: string = "";

    error : string = "";
    constructor (   private auth:AuthentificationService,
                    private router:Router
                ) {}

    ngOnInit() {}

    onSubmit() {
        this.auth.login(this.username,this.password)
        .pipe(first()).subscribe(
            res => {
                if (res.token == undefined) {
                    this.error = "Undefined username or wrong password";
                    console.log("Show Error feedback!");
                } else {
                    window.localStorage.setItem("accesToken", res.token);
                    this.router.navigate(["/dashboard"]);
                }
            },
            err => {
              this.error = err;
              console.log("Error occured : "+ err);
            }
        );
    }
}
