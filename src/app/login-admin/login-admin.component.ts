import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/Authentification/authentification.service';
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent implements OnInit {

    username: string = "";
    password: string = "";

    error : string = "";
    loading : boolean = false;

    constructor (   private auth:AuthentificationService,
                    private router:Router,
                ) {}

    ngOnInit() {}

    onSubmit() {
      this.loading = true;
      this.auth.login(this.username,this.password)
      .pipe(first()).subscribe(
          res => {
            if (res.token == undefined) {
              this.loading = false;
              console.log("Show Error feedback!");
            } else {
              window.localStorage.setItem("accesToken", res.token);
<<<<<<< HEAD
              window.localStorage.setItem("isSuperAdmin","true");
=======
              window.localStorage.setItem("isSuperAdmin", 'true');
>>>>>>> 9be4607fbd5e08499f6b0ed37964beb8ce24056d
              this.router.navigate(["/dashboard"]);
            }
          },
          err => {
            this.loading = false;
            this.error = "Undefined username or wrong password.";
            console.log("Error occured : "+ err);
          }
        );
        /*window.localStorage.setItem("accesToken", "fhqzhe5fz5efehfeyff55q12sd4");
        window.localStorage.setItem("isSuperAdmin","true");
        this.router.navigate(["/dashboard"]);*/
    }
}
