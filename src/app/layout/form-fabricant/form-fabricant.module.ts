import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

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
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule],
    declarations: [FormFabricantComponent]
})
export class FormFabricantModule {}
