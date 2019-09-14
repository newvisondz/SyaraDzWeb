import { Component, OnInit, ViewChild,Optional,Inject,ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {CreateVersionDialogComponent} from './../create-version-dialog/create-version-dialog.component';
import {SharedInfosService} from './../shared-infos.service';
@Component({
  selector: 'app-create-modele-dialog',
  templateUrl: './create-modele-dialog.component.html',
  styleUrls: ['./create-modele-dialog.component.scss']
})
export class CreateModeleDialogComponent implements OnInit {
  optionsList = [];
  firstFormGroup: FormGroup;
  couleurs = [];
  options = []
  linkImages = [];
  imageFiles : File = null;
  @ViewChild('file') file : ElementRef;

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<CreateModeleDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog,
              private _SharedInfosService: SharedInfosService) { }

  ngOnInit() {
    this.optionsList = this._SharedInfosService.optionsList;
    this.optionsList = this.optionsList.sort();
    this.firstFormGroup = this._formBuilder.group({
      nameModele : ['', Validators.required],
      name: ['', Validators.required],
      value: ['', Validators.required],
      nameOption : [''],
      valueOption : [''],
      modeleImages: ['', Validators.required]
    });
  }

  addFiles() {
      this.file.nativeElement.click();
  }

  onFileChange($event){
    this.imageFiles = (<HTMLInputElement>event.target).files[0];
      if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {

        console.log(this.imageFiles);
        var reader = new FileReader();

        reader.onload = (event: ProgressEvent) => {
          this.linkImages.push((<FileReader>event.target).result as string);
        }

        reader.readAsDataURL((<HTMLInputElement>event.target).files[0]);
      }
  }

  onCreateCouleur(){
    console.log("add couleur " + this.firstFormGroup.controls['name'].value);
    this.couleurs.push({
      name : this.firstFormGroup.controls['name'].value,
      value : this.firstFormGroup.controls['value'].value
    })
  }

  onCreateOption(){
    console.log("add Option " + this.firstFormGroup.controls['nameOption'].value);
    let valuesString = this.firstFormGroup.controls['valueOption'].value;
    let values = valuesString.split(";");
    console.log(values);
    this.options.push({
      name : this.firstFormGroup.controls['nameOption'].value,
<<<<<<< HEAD
      values : [this.firstFormGroup.controls['valueOption'].value]
=======
      values : values
>>>>>>> b8eb8633f47df44857d2b87d22b65236d9bb49fb
    })

    console.log(this.options);
    
  }

  onDeleteCouleur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title : "Supprimer couleur",
      message : "Êtes vous sûre de supprimer cette couleur ?"
    };
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //confirm delete
        console.log("delete couleur " + this.couleurs[id].name);
        this.couleurs.splice(id,1);
      }
    });
  }

  onDeleteOption(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title : "Supprimer option",
      message : "Êtes vous sûre de supprimer cette option ?"
    };
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //confirm delete
        console.log("delete Option " + this.options[id].name);
        this.options.splice(id,1);
      }
    });
  }

  onConfirm(){
    const data = {
      status : true,
      nameModele : this.firstFormGroup.controls['nameModele'].value,
      colors : this.couleurs,
      options : this.options,
      photos : this.imageFiles
    }
    this.dialogRef.close(data);
  }
}
