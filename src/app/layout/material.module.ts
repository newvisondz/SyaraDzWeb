import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatBadgeModule,
  MatSelectModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatBadgeModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatBadgeModule,
    MatSelectModule
  ]
})

export class MaterialModule {}
