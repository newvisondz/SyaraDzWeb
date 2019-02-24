import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.scss']
})
export class TarifComponent implements OnInit {
  @Input() type : String;
  @Input() description : String;
  @Input() features : any[];
  @Input() price : number;
  
  constructor() { }

  ngOnInit() {
  }

}
