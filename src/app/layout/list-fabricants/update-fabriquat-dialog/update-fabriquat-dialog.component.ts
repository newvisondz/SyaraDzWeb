import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-update-fabriquat-dialog',
  templateUrl: './update-fabriquat-dialog.component.html',
  styleUrls: ['./update-fabriquat-dialog.component.scss']
})
export class UpdateFabriquatDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  logo : string = '';
  @ViewChild('file') file;

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<UpdateFabriquatDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fabricant: ['', Validators.required],
      addressFabricant: ['', Validators.required],
      logoFabricant: ['', Validators.required]
    });
    console.log(this.data.fabricant);
  }
  addFiles() {
      this.file.nativeElement.click();
    }
  onFileChange($event){
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
      logo : this.logo
    }
    this.dialogRef.close(data);
  }
}
