import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
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

  constructor(private _formBuilder: FormBuilder,
              private fabricant:FabricantCRUDService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fabricant: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.firstFormGroup.controls; }

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
          },
          err => {
              console.log("Error occured : "+ err);
          }
      );
      alert('SUCCESS!! :-)' + this.firstFormGroup.controls['fabricant'].value)
  }
}
