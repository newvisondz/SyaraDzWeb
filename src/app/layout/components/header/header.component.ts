import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthentificationService } from '../../../Services//Authentification/authentification.service'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() loading : boolean = false;
  @Input() error : string = "";
  
  constructor(private auth:AuthentificationService,
              private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.router.navigate([""]);
  }

}
