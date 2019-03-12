import { Component, OnInit , Inject,Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor( @Optional() public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
               @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }
  onConfirm(){
    this.dialogRef.close(true);
  }
}
