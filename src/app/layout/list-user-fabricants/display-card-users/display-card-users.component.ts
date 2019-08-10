import { Component, OnInit, Input } from '@angular/core';
import { first,tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FabricantCRUDService } from "../../../Services/Fabricant-CRUD/fabricant-crud.service";
import { Fabricant} from '../../../model/fabricant.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-display-card-users',
  templateUrl: './display-card-users.component.html',
  styleUrls: ['./display-card-users.component.scss']
})


export class DisplayCardUsersComponent implements OnInit {

  fabricants : Observable<Fabricant>[];
  loading : boolean = false;
  error : string = "";
  pathAdmins : string = "/dashboard/afficherUsersFabricants/admins/";

  readonly ROOT_URL = environment.baseUrl;
  constructor(private fabricant:FabricantCRUDService) { }

  ngOnInit() {
    this.loading = true;
    this.fabricant.list()
        .pipe(first()).subscribe(
          res => {
              console.log(res);
              this.fabricants = res.manufacturers;
              this.loading = false;
          },
          err => {
              this.error = "Error occured : "+ err;
              console.log("Error occured : "+ err);
              this.loading = false;
          }
      );
  }
  openUsers(id){
    console.log(id);
  }

}
