import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { FabricantCRUDService } from '../../Services/Fabricant-CRUD/fabricant-crud.service'
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-form-fabricant',
    templateUrl: './form-fabricant.component.html',
    styleUrls: ['./form-fabricant.component.scss'],
})
export class FormFabricantComponent implements OnInit {


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted = false;
  logo : string = '';

  constructor(private _formBuilder: FormBuilder,
              private fabricant:FabricantCRUDService,
              private router:Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fabricant: ['', Validators.required],
      addressFabricant: ['', Validators.required],
      logoFabricant: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.firstFormGroup.invalid) {
          console.log("Unvalid input");
          return;
      }

      this.fabricant.create(this.firstFormGroup.controls['fabricant'].value)
      .pipe(first()).subscribe(
          res => {
              console.log(res);
              this.router.navigate(["/dashboard/afficherFabricants"]);
          },
          err => {
              console.log("Error occured : "+ err);
          }
      );

  }
}
