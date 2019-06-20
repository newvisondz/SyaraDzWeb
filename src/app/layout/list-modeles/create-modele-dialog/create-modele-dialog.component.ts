import { Component, OnInit, ViewChild,Optional,Inject,ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {CreateVersionDialogComponent} from './../create-version-dialog/create-version-dialog.component';
@Component({
  selector: 'app-create-modele-dialog',
  templateUrl: './create-modele-dialog.component.html',
  styleUrls: ['./create-modele-dialog.component.scss']
})
export class CreateModeleDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  versions = [];
  couleurs = [];
  modeleImage : File = null;
  linkImage : string = '';
  @ViewChild('file') file : ElementRef;

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<CreateModeleDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameModele : ['', Validators.required],
      name: ['', Validators.required],
      value: ['', Validators.required],
      modeleImage: ['', Validators.required]
    });
  }

  addFiles() {
      this.file.nativeElement.click();
  }

  onFileChange($event){
    this.modeleImage = (<HTMLInputElement>event.target).files[0];
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.linkImage= (<FileReader>event.target).result as string;
      }

      reader.readAsDataURL((<HTMLInputElement>event.target).files[0]);
    }
  }

  onCreateVersion(){
    //open create version modal
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CreateVersionDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        console.log("add version " + result.nameVersion);
        let version = {
          name : result.nameVersion,
          options : result.options
        };
        this.versions.push(version);
      }
    });

  }

  onDeleteVersion(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id: id};
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //confirm delete
        console.log("delete option " + this.versions[id].name);
        this.versions.splice(id,1);
      }
    });
  }

  onCreateCouleur(){
    console.log("add couleur " + this.firstFormGroup.controls['name'].value);
    this.couleurs.push({
      name : this.firstFormGroup.controls['name'].value,
      value : this.firstFormGroup.controls['value'].value
    })
  }

  onDeleteCouleur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id: id};
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //confirm delete
        console.log("delete couleur " + this.couleurs[id].name);
        this.couleurs.splice(id,1);
      }
    });
  }

  onConfirm(){
    const data = {
      status : true,
      nameModele : this.firstFormGroup.controls['nameModele'].value,
      versions : this.versions,
      couleurs : this.couleurs,
      photo : this.linkImage
    }
    this.dialogRef.close(data);
  }
}
