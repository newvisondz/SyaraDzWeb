import { Component, OnInit ,ViewChild,AfterViewInit, Input} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import { DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ZoomImageDialogComponent} from './../../../shared/zoom-image-dialog/zoom-image-dialog.component';
import { UpdateModeleDialogComponent} from './../update-modele-dialog/update-modele-dialog.component';
import { CreateAttributeDialogComponent} from './../create-attribute-dialog/create-attribute-dialog.component';
import { CreateVersionDialogComponent} from './../create-version-dialog/create-version-dialog.component';
import { CreateModeleDialogComponent } from './../create-modele-dialog/create-modele-dialog.component';
@Component({
    selector: 'app-list-versions',
    templateUrl: './list-versions.component.html',
    styleUrls: ['./list-versions.component.scss'],
})
export class ListVersionsComponent implements OnInit,AfterViewInit {
    @Input() idModele ;

    //we don't need to initialise once we fetch versions from database with idModele
    @Input() listVersions = [
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

    //list des modéles à récupérer depuis la BDD
    displayedColumns: string[] = ['index','version','options', 'manipulations'];


    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {
        //
    }

    ngAfterViewInit() {

    }


    //supprimer une option
    onDeleteOption(id:number,idVersion : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {id: id};
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          //valider la suppression
          console.log("delete option " + this.listVersions[idVersion].options[id].name);
          this.listVersions[idVersion].options.splice(id,1);
        }
      });
    }

    //modifier une option
    onUpdateOption(id:number,idVersion : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        option: this.listVersions[idVersion].options[id],
      };
      const dialogRef = this.dialog.open(UpdateModeleDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la modification
          console.log("update option " + this.listVersions[idVersion].options[id].name);
          this.listVersions[idVersion].options[id] = {
            name : result.name,
            value : result.value
          }
        }
      });
    }

    //créer une option
    onCreateOption(idVersion:number,idModele:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la création
          console.log("add option " + result.name);
          this.listVersions[idVersion].options.push({
            name : result.name,
            value : result.value
          })
        }
      });
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
        }
      });
    }

}
