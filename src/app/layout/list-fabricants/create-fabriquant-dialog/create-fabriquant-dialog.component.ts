import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-fabriquant-dialog',
  templateUrl: './create-fabriquant-dialog.component.html',
  styleUrls: ['./create-fabriquant-dialog.component.scss']
})
export class CreateFabriquantDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  logo : string = '';
  logoImage : File = null;
  @ViewChild('file') file;

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<CreateFabriquantDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fabricant: ['', Validators.required],
      addressFabricant: ['', Validators.required],
      logoFabricant: ['', Validators.required]
    });
  }
  addFiles() {
      this.file.nativeElement.click();
    }
  onFileChange($event){
    this.logoImage = (<HTMLInputElement>event.target).files.item(0);
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.logo = (<FileReader>event.target).result as string;
      }

      reader.readAsDataURL((<HTMLInputElement>event.target).files[0]);
    }
  }

  onConfirm(){
    const data = {
      status : true,
      marque : this.firstFormGroup.controls['fabricant'].value,
      address : this.firstFormGroup.controls['addressFabricant'].value,
      logo : this.logoImage
    }
    this.dialogRef.close(data);
  }
}
