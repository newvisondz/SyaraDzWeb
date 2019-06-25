import { Component, OnInit, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-message-snack-bar',
  templateUrl: './message-snack-bar.component.html',
  styleUrls: ['./message-snack-bar.component.scss']
})
export class MessageSnackBarComponent implements OnInit {
  constructor( @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
  }
}
