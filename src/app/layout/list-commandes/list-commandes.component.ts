import { Component, OnInit} from '@angular/core';
import { first,tap } from 'rxjs/operators';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { MessageSnackBarComponent } from './../../shared/message-snack-bar/message-snack-bar.component';

import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
    selector: 'app-list-commandes',
    templateUrl: './list-commandes.component.html',
    styleUrls: ['./list-commandes.component.scss'],
})
export class ListCommandesComponent implements OnInit {
    titleView = "";
    //for loading and displaying errors
    loading = false;
    error = "";
    //header of the table
    displayedColumns: string[] = ['index','vehicle', 'manipulations'];
    tabCommandes:MatTableDataSource<commande>;

    manufacturerId = "";

    durationInSeconds = 5;


    constructor(public dialog: MatDialog,
                private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.manufacturerId = localStorage.getItem('manufacturer');
        this.titleView = "Tout les commandes de "+ this.manufacturerId;
        //get the commandes list
        let tab = [
          {
            id : "2d5azfa4f4ae48f8e8f",
            vehicle : "dqff5f5e5e5f8ef5e"
          }
        ];
        this.tabCommandes = new MatTableDataSource(tab);
    }

    onAcceptCommand(id:string,index : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
       title : "Confirmer l'acceptation de la commande",
       message : "Êtes vous sûre de confirmer cette commande ?"
      };
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          //call the confirm method of serive
        }
      });
    }
}
interface commande{
  id : string;
  vehicle : string
}
