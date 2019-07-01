import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-contract-fabricant-dialog',
  templateUrl: './contract-fabricant-dialog.component.html',
  styleUrls: ['./contract-fabricant-dialog.component.scss']
})
export class ContractFabricantDialogComponent implements OnInit {
  date : Date = new Date();
  place = "Rue 67, Kouba, Alger, Algérie";
  constructor(@Optional() public dialogRef: MatDialogRef<ContractFabricantDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {

  }

  onConfirm(){
    this.dialogRef.close();
  }
}
