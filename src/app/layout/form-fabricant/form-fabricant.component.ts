import { Component,ElementRef ,OnInit ,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { FabricantCRUDService } from '../../Services/Fabricant-CRUD/fabricant-crud.service'
import { AdminsCrudService } from '../../Services/Admins-CRUD/admins-crud.service'

import { Fabricant} from '../../model/fabricant.model';
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
  error : string = "";
  logoImage : File = null;
  loading : boolean = false;
  @ViewChild('file') file : ElementRef;

  constructor(private _formBuilder: FormBuilder,
              private fabricant:FabricantCRUDService,
              private admins : AdminsCrudService, 
              private router:Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fabricant: ['', Validators.required],
      addressFabricant: ['', Validators.required],
      logoFabricant: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      usersurname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      fabricant: [{value: '', disabled: true}, Validators.required],
    });
  }

  addFiles() {
      this.file.nativeElement.click();
  }
  getFabricantName(){
      return this.firstFormGroup.controls['fabricant'].value;
  }
  onFileChange($event){
    this.logoImage = (<HTMLInputElement>event.target).files[0];
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
          this.error = "Unvalid input";
          console.log("Unvalid input");
          return;
      }
      /*if (this.secondFormGroup.invalid) {
        this.error = "Unvalid input";
        console.log("Unvalid input");
        return;
      }*/
      this.createFabricant();

  }
  createFabricant(){
    let brand = this.firstFormGroup.controls['fabricant'].value;
    let logo : File = this.file.nativeElement.files[0];
    this.loading = true;
    this.fabricant.create(brand,this.logoImage)
    .pipe(first()).subscribe(
        res => {
            this.loading = false;
            //this.createAdminFabricant(res.id);
            console.log(res);
            this.router.navigate(["/dashboard/afficherFabricants"]);
        },
        err => {
            this.error = err;
            this.loading = false;
            console.log("Error occured : "+ err);
        }
    );
  }
  createAdminFabricant(manufacturer:string){
    const admin = {
        email : this.secondFormGroup.controls['email'].value,
        password : this.secondFormGroup.controls['password'].value ,
        firstName : this.secondFormGroup.controls['username'].value,
        lastName : this.secondFormGroup.controls['usersurname'].value,
        address : this.secondFormGroup.controls['address'].value,
        phone : this.secondFormGroup.controls['phone'].value,
    };
      console.log(manufacturer);
      this.loading = true;
      //create the admin of the manufacturer
      this.admins.create(manufacturer,
                      admin.email,
                      admin.password,
                      admin.lastName,
                      admin.firstName,
                      admin.address,
                      admin.phone)
    .pipe(first()).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured : /n"+ err);
      }
  );
  }
}
