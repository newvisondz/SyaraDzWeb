import { Component, OnInit } from '@angular/core';
import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {

    fabricants:any = [];

    constructor(private fabricant:FabricantCRUDService) {}

    ngOnInit() {
      this.fabricant.list()
      .pipe(first()).subscribe(
        res => {
            console.log(res);
            this.fabricants = res.fabricants;
        },
        err => {
            console.log("Error occured : "+ err);
        }
    );
    }
}
