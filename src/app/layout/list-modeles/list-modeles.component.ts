import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {ZoomImageDialogComponent} from './../../shared/zoom-image-dialog/zoom-image-dialog.component';
import {UpdateModeleDialogComponent} from './update-modele-dialog/update-modele-dialog.component';
import {CreateAttributeDialogComponent} from './create-attribute-dialog/create-attribute-dialog.component';
import {CreateVersionDialogComponent} from './create-version-dialog/create-version-dialog.component';
import { CreateModeleDialogComponent } from './create-modele-dialog/create-modele-dialog.component';
import { ListColorsDialogComponent } from './list-colors-dialog/list-colors-dialog.component';

@Component({
    selector: 'app-list-modeles',
    templateUrl: './list-modeles.component.html',
    styleUrls: ['./list-modeles.component.scss'],
})
export class ListModelesComponent implements OnInit,AfterViewInit {

    //list des modéles à récupérer depuis la BDD
    path = "versions/";
    displayedColumns: string[] = ['index', 'photo','model','versions', 'couleurs','disponibilte', 'manipulations'];
    listModeles = [
      {
        name : "TOYOTA AURIS 3",
        photo : "../../assets/car1.jpg",
        couleurs : [
          {
            name : "Bleu Nebula",
            value : "#00467e"
          },
          {
            name : "Rouge Allure Nacré",
            value : "#580c1b"
          },
          {
            name : "Bleu Denim Métallisé",
            value : "#2b4756"
          },
          {
            name : "Gris Aluminium Métallisé",
            value : "#939395"
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
    //afficher les Couleurs
    onDisplayColors(id:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        colors: this.listModeles[id].couleurs,
        id : id
      };
      const dialogRef = this.dialog.open(ListColorsDialogComponent, dialogConfig);
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

    //zoomer sur la photo de model
    zoomOnPhoto(url : string){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        image : url
      };
      const dialogRef = this.dialog.open(ZoomImageDialogComponent, dialogConfig);

    }
}
