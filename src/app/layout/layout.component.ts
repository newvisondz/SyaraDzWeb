import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  loading : boolean = false;
  error : string = "";

  constructor() {
      console.log(localStorage.getItem('accesToken'));
  }

  ngOnInit() {
  }

}
