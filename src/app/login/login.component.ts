import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    loading : boolean = false;

    constructor (    private router:Router,
                ) {}

    ngOnInit() {}

    onSubmit() {
      this.loading = true;
      //login as user or admin fabricant
    }
}
