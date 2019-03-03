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
    
    constructor (   private auth:AuthentificationService,
                    private router:Router
                ) {}

    ngOnInit() {}

    onSubmit() {
        this.auth.login(this.username,this.password)
        .pipe(first()).subscribe(
            res => {
                if (res.token == undefined) {
                    console.log("Show Error feedback!");
                } else {
                    window.localStorage.setItem("accesToken", res.token);
                    this.router.navigate(["/dashboard"]);
                }
            },
            err => {
                console.log("Error occured : "+ err);
            }
        );
}
