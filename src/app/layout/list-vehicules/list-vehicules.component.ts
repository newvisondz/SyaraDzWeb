import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { first,tap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
//import {UpdateVehiculeDialogComponent} from './update-vehicule-dialog/update-vehicule-dialog.component';

@Component({
    selector: 'app-list-vehicules',
    templateUrl: './list-vehicules.component.html',
    styleUrls: ['./list-vehicules.component.scss'],
})

export class ListVehiculesComponent implements OnInit,AfterViewInit {

    vehicules:MatTableDataSource<Vehicule>;
    displayedColumns: string[] = ['index','numéro de chassis', 'version','couleur','concessionnaire', 'manipulations'];
    lengthList : number = 2;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.loadVehiculesPage();
    }

    ngAfterViewInit() {
        this.paginator.page
            .pipe(
                tap(() => this.loadVehiculesPage())
            )
            .subscribe();
    }

    loadVehiculesPage() {
      const data = this.vehicules.data;
      data.push({
        id : "ge565d9f9z8z7",
        numChassis : "1259287",
        version : "TOYOTA AURIS 3",
        couleur : { name : "Noire", value : "#000000"},
        concessionnaire : "Alger",
        options : { name : "Places" , value :"6"}
      },{
        id : "ge565d9f9z8z7",
        numChassis : "12592458",
        version : "TOYOTA AURIS 4",
        couleur : { name : "Gris", value : "#CCCCCC"},
        concessionnaire : "Alger",
        options : { name : "Places" , value :"5"}
      } );
      this.vehicules.data = data;

    }

    onDelete(id:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {id: id};
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.vehicules.data.splice(id,1);
        }
      });
    }
    onUpdate(vehicule:any){
      /*const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {vehicule: vehicule};
      const dialogRef = this.dialog.open(UpdateVehiculeDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          // update
        }
      });*/
    }
}

interface Vehicule {
    id : String,
    numChassis : String,
    version : String,
    couleur : any,
    concessionnaire : String,
    options : any
}
