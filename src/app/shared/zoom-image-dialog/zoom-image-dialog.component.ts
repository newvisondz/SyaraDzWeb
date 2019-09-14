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
  title = "";
  photos = [];
  current = ""
  ngOnInit() {
    this.title = this.data.title;
    this.photos = this.data.photos;
    this.current = this.photos[0];
  }
  onConfirm(){
    this.dialogRef.close(true);
  }
  onDisplayOne(index : number){
    this.current = this.photos[index];
  }
}
