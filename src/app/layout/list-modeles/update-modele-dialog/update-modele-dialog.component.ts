import { Component, OnInit, ViewChild,Optional,Inject,ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {CreateVersionDialogComponent} from './../create-version-dialog/create-version-dialog.component';

@Component({
  selector: 'app-update-modele-dialog',
  templateUrl: './update-modele-dialog.component.html',
  styleUrls: ['./update-modele-dialog.component.scss']
})
export class UpdateModeleDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  modeleImage : File = null;
  linkImage : string = '';
  @ViewChild('file') file : ElementRef;

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<UpdateModeleDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameModele : [this.data.name, Validators.required],
      modeleImage: ['', Validators.required]
    });
    this.linkImage = (new String("https://sayaradz2.herokuapp.com")).concat(this.data.image);
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

  onConfirm(){
    const data = {
      status : true,
      nameModele : this.firstFormGroup.controls['nameModele'].value,
      photo : this.modeleImage
    }
    this.dialogRef.close(data);
  }
}
