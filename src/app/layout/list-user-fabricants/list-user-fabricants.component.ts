import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material';
import { AuthentificationService } from "../../Services/Authentification/authentification.service";
import { AdminsCrudService } from "../../Services/Admins-CRUD/admins-crud.service"


@Component({
    selector: 'app-user-list-fabricants',
    templateUrl: './list-user-fabricants.component.html',
    styleUrls: ['./list-user-fabricants.component.scss'],
})
export class ListUserFabricantsComponent implements OnInit,AfterViewInit {

    fabricants = [];


    loading : boolean = false;
    error : string = "";
    lengthList : number = 0;
    marque : string ;

    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(private auth:AuthentificationService,
                private admins : AdminsCrudService,) {}

    ngOnInit() {

    }

    ngAfterViewInit(){}

  }
