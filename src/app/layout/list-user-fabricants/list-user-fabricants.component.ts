import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material';


@Component({
    selector: 'app-user-list-fabricants',
    templateUrl: './list-user-fabricants.component.html',
    styleUrls: ['./list-user-fabricants.component.scss'],
})
export class ListUserFabricantsComponent implements OnInit,AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor() {}

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

}
