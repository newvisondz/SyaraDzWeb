import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {UpdateModeleDialogComponent} from './update-modele-dialog/update-modele-dialog.component';
import {CreateAttributeDialogComponent} from './create-attribute-dialog/create-attribute-dialog.component';
import {CreateVersionDialogComponent} from './create-version-dialog/create-version-dialog.component';
import { CreateModeleDialogComponent } from './create-modele-dialog/create-modele-dialog.component';
@Component({
    selector: 'app-list-modeles',
    templateUrl: './list-modeles.component.html',
    styleUrls: ['./list-modeles.component.scss'],
})
export class ListModelesComponent implements OnInit,AfterViewInit {

    //list des modéles à récupérer depuis la BDD
    listModeles = [
      {
        name : "TOYOTA AURIS 3",
        photo : "../../assets/car1.jpg",
        couleurs : [
          {
            name : "Rouge",
            value : "#A91101"
          },
          {
            name : "Noire",
            value : "#00000"
          },
          {
            name : "Blanc",
            value : "#FFFFFF"
          },
          {
            name : "Gris",
            value : "#cccccc"
          },
        ],
        versions : [
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
        ]
      },
      {
        name : "TOYOTA AYGO 3 PORTES",
        photo : "../../assets/car2.jpg",
        couleurs : [
          {
            name : "Rouge",
            value : "#A91101"
          },
          {
            name : "Noire",
            value : "#00000"
          },
          {
            name : "Blanc",
            value : "#FFFFFF"
          },
          {
            name : "Gris",
            value : "#cccccc"
          },],
          versions : [
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
          ]
      },
      {
        name : "TOYOTA YARIS",
        photo : "../../assets/car3.jpg",
        couleurs : [
          {
            name : "Rouge",
            value : "#A91101"
          },
          {
            name : "Noire",
            value : "#00000"
          },
          {
            name : "Blanc",
            value : "#FFFFFF"
          },
          {
            name : "Gris",
            value : "#cccccc"
          },
        ],
        versions : [
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
        ]
      },
    ]

    constructor(public dialog: MatDialog) {

    }

    ngOnInit() {
        //remplir la Liste des modéles
    }

    ngAfterViewInit() {

    }


    //supprimer une option
    onDeleteOption(id:number,idModele : number,idVersion : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {id: id};
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          //valider la suppression
          console.log("delete option " + this.listModeles[idModele].versions[idVersion].options[id].name);
          this.listModeles[idModele].versions[idVersion].options.splice(id,1);
        }
      });
    }

    //supprimer couleur
    onDeleteCouleur(id:number,idModele : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {id: id};
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          //valider la suppression
          console.log("delete couleur " + this.listModeles[idModele].couleurs[id].name);
          this.listModeles[idModele].couleurs.splice(id,1);
        }
      });
    }

    //modifier une option
    onUpdateOption(id:number,idModele:number,idVersion : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        option: this.listModeles[idModele].versions[idVersion].options[id],
      };
      const dialogRef = this.dialog.open(UpdateModeleDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la modification
          console.log("update option " + this.listModeles[idModele].versions[idVersion].options[id].name);
          this.listModeles[idModele].versions[idVersion].options[id] = {
            name : result.name,
            value : result.value
          }
        }
      });
    }

    //modifier une couleur
    onUpdateCouleur(id:number,idModele:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        option: this.listModeles[idModele].couleurs[id],
      };
      const dialogRef = this.dialog.open(UpdateModeleDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la modification
          console.log("update couleur " + this.listModeles[idModele].couleurs[id].name);
          this.listModeles[idModele].couleurs[id] = {
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
          this.listModeles[idModele].versions[idVersion].options.push({
            name : result.name,
            value : result.value
          })
        }
      });
    }

    //créer une couleur
    onCreateCouleur(idModele:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la création
          console.log("add couleur " + result.name);
          this.listModeles[idModele].couleurs.push({
            name : result.name,
            value : result.value
          })
        }
      });
    }

    //créer une version
    onCreateVersion(idModele:number){
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
          this.listModeles[idModele].versions.push(version);
        }
      });
    }

    //créer un modéle
    onCreateModele(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(CreateModeleDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          console.log("add modele " + result.nameModele);
          let modele = {
            name : result.nameModele,
            couleurs : result.couleurs,
            versions : result.versions,
            photo : result.photo,
          };
          this.listModeles.push(modele);
        }
      });
    }

}
