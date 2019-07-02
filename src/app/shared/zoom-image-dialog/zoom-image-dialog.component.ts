import { Component, OnInit , Inject,Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-zoom-image-dialog',
  templateUrl: './zoom-image-dialog.component.html',
  styleUrls: ['./zoom-image-dialog.component.scss']
})
export class ZoomImageDialogComponent implements OnInit {

  constructor( @Optional() public dialogRef: MatDialogRef<ZoomImageDialogComponent>,
               @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  onConfirm(){
    this.dialogRef.close(true);
  }
}
