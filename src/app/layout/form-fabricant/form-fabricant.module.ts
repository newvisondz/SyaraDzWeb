import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './../material.module';
import { FormFabricantRoutingModule } from './form-fabricant-routing.module';
import { FormFabricantComponent } from './form-fabricant.component';
import { PageHeaderModule } from './../shared';
@NgModule({
    imports: [
      CommonModule,
      FormFabricantRoutingModule,
      PageHeaderModule,MatStepperModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule],
    declarations: [FormFabricantComponent]
})
export class FormFabricantModule {}
