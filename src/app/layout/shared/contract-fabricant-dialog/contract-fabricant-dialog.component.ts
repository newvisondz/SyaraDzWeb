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
  website = {
    title : "SayaraDz",
    forme : "SARL",
    address : "Alger, Algérie",
    capital : "500000 DA",
    type : "E-commerce",
    number : 5,
    ceo : "Bouhenniche Sihem"
  };
  factory = {
    title : "SayaraDz",
    forme : "SARL",
    address : "Alger, Algérie",
    capital : "500000 DA",
    type : "E-commerce",
    number : 5,
    ceo : "Bouhenniche Sihem"
  };
  date = new Date();
  place = "Kouba, Alger";
  constructor(@Optional() public dialogRef: MatDialogRef<ContractFabricantDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {

  }

  onConfirm(){
    this.dialogRef.close();
  }
}
