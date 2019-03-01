import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
    selector: 'app-form-fabricant',
    templateUrl: './form-fabricant.component.html',
    styleUrls: ['./form-fabricant.component.scss'],
})
export class FormFabricantComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  submitted = false;
  constructor(private _formBuilder: FormBuilder) {}

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
            return;
        }

        alert('SUCCESS!! :-)' + this.firstFormGroup.controls['fabricant'].value)
    }
}
