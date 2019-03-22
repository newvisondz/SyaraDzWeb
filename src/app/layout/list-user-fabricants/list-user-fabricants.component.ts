import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { first,tap } from 'rxjs/operators';
import {MatPaginator} from '@angular/material';

@Component({
    selector: 'app-user-list-fabricants',
    templateUrl: './list-user-fabricants.component.html',
    styleUrls: ['./list-user-fabricants.component.scss'],
})
export class ListUserFabricantsComponent implements OnInit,AfterViewInit {

    fabricants = [
      {
        id : 1,
        name : "Sihem",
        surname : "Bouhenniche",
        post : "Admin",
        marque : "Audi",
        email : "sayaradz@esi.dz",
        password : "root",
        address : "CEM El Badre batiment A N 21 Hai El Badre Kouba -Alger",
        phone : "0551 78 91 42"
      },
      {
        id : 2,
        name : "Oussama",
        surname : "Bouhenniche",
        post : "User",
        marque : "Mercedes",
        email : "sayaradz@esi.dz",
        password : "root",
        address : "CEM El Badre batiment A N 21 Hai El Badre Kouba -Alger",
        phone : "0551 78 91 42"
      },
      {
        id : 3,
        name : "Asma",
        surname : "Bouhenniche",
        post : "Admin",
        marque : "Renault",
        email : "sayaradz@esi.dz",
        password : "root",
        address : "CEM El Badre batiment A N 21 Hai El Badre Kouba -Alger",
        phone : "0551 78 91 42"
      },
      {
        id : 4,
        name : "Latif",
        surname : "Bouhenniche",
        post : "user",
        marque : "Hundai",
        email : "sayaradz@esi.dz",
        password : "root",
        address : "CEM El Badre batiment A N 21 Hai El Badre Kouba -Alger",
        phone : "0551 78 91 42"
      }
    ];
    loading : boolean = false;
    error : string = "";
    lengthList : number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor() {}

    ngOnInit() {
    }

    setLengthList(){
    }
    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => this.loadUserFabricantsPage())
            )
            .subscribe();
    }

    loadUserFabricantsPage() {

    }

}
