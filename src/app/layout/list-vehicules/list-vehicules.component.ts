import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { first,tap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import { DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { VehicleService } from './../../Services/Vehicle-CRUD/vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-vehicules',
    templateUrl: './list-vehicules.component.html',
    styleUrls: ['./list-vehicules.component.scss'],
})

export class ListVehiculesComponent implements OnInit,AfterViewInit {

    vehicules:MatTableDataSource<Vehicule>;
    displayedColumns: string[] = ['index','numéro de chassis', 'version','couleur','concessionnaire', 'manipulations'];
    manufacturerId = "";
    idModel = "";
    idVersion = "";

    constructor(public dialog: MatDialog,
                private _VehicleService : VehicleService,
               private _Activatedroute:ActivatedRoute) {}

    ngOnInit() {
      this.manufacturerId = localStorage.getItem('manufacturer');
      this.idModel = this._Activatedroute.snapshot.paramMap.get("id");
      this.idVersion = this._Activatedroute.snapshot.paramMap.get("vid");
      this.loadVehicules();
    }

    ngAfterViewInit() {

    }

    loadVehicules() {
      const data = [];
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
      this.vehicules = new MatTableDataSource(data);
    }

    onDelete(id:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        title : "Confirmer la suppression",
        message : "Êtes vous sûre de supprimer cette véhicule ?"
      };
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.vehicules.data.splice(id,1);
        }
      });
    }

    onCreateCar(){

    }

    onUploadCarsFile(){

    }

    printCars(){

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
