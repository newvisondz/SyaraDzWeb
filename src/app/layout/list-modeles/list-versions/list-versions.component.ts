import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig, MatTableDataSource} from '@angular/material';

import { CreateVersionDialogComponent} from './../create-version-dialog/create-version-dialog.component';
import { ListOptionsDialogComponent } from './list-options-dialog/list-options-dialog.component';

@Component({
    selector: 'app-list-versions',
    templateUrl: './list-versions.component.html',
    styleUrls: ['./list-versions.component.scss'],
})
export class ListVersionsComponent implements OnInit,AfterViewInit {
    //récupérer idModel a partir de router
    idModele ;

    //list des modéles à récupérer depuis la BDD
    //we don't need to initialise once we fetch versions from database with idModele
    listVersions = [
      {
        name : "TOYOTA AURIS 2 TOURING SPORTS",
        options : [
          {
            name : "Places",
            value : "5"
          },
          {
            name : "Air conditionné",
            value : "De série"
          },
          {
            name : "Navigateur",
            value : "dès 450 €"
          },
          {
            name : "inclut démarrage sans clé",
            value : "Dés 650 €"
          },
        ],
      },
      {
        name : "TOYOTA AURIS 2 TOURISM",
        options : [
          {
            name : "Places",
            value : "5"
          },
          {
            name : "Air conditionné",
            value : "De série"
          },
          {
            name : "Navigateur",
            value : "dès 450 €"
          },
          {
            name : "inclut démarrage sans clé",
            value : "Dés 650 €"
          },
        ],
      },
      {
        name : "TOYOTA AURIS 2 TOURING",
        options : [
          {
            name : "Places",
            value : "5"
          },
          {
            name : "Air conditionné",
            value : "De série"
          },
          {
            name : "Navigateur",
            value : "dès 450 €"
          },
          {
            name : "inclut démarrage sans clé",
            value : "Dés 650 €"
          },
        ],
      },
      {
        name : "TOYOTA AURIS 2 AFFAIRES",
        options : [
          {
            name : "Places",
            value : "5"
          },
          {
            name : "Air conditionné",
            value : "De série"
          },
          {
            name : "Navigateur",
            value : "dès 450 €"
          },
          {
            name : "inclut démarrage sans clé",
            value : "Dés 650 €"
          },
        ],
      },
      {
        name : "TOYOTA AURIS 2 BUSINESS",
        options : [
          {
            name : "Places",
            value : "5"
          },
          {
            name : "Air conditionné",
            value : "De série"
          },
          {
            name : "Navigateur",
            value : "dès 450 €"
          },
          {
            name : "inclut démarrage sans clé",
            value : "Dés 650 €"
          },
        ],
      },
    ];
    versionsTable:MatTableDataSource<Version>;
    displayedColumns: string[] = ['index','version','options', 'disponibilite', 'prix', 'manipulations'];


    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {
        //initialise versionsTable
        this.versionsTable = new MatTableDataSource(this.listVersions);
    }

    ngAfterViewInit() {

    }

    //aficher dialog des options
    onDisplayOptions(id:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        id: id,
        options : this.listVersions[id].options
      };
      console.log(this.listVersions[id].options);
      const dialogRef = this.dialog.open(ListOptionsDialogComponent, dialogConfig);

    }

    //créer une version
    onCreateVersion(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(CreateVersionDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la création
          console.log("add version " + result.nameVersion);
          let version = {
            name : result.nameVersion,
            options : result.options
          };
          this.listVersions.push(version);
          this.versionsTable = new MatTableDataSource(this.listVersions);
        }
      });
    }

}

//types utilisés
interface Version{
  name : string,
  options : Option[]
}
interface Option{
  name : string,
  value : string
}
