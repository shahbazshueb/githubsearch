/**
 * Created by shahbaz.ali on 12/16/2016.
 */
import { Component } from '@angular/core';
import {ProfileService} from "./profile.service";
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent  {
  user[];
  constructor(private service: ProfileService){
    this.service.getUser().subscribe(user => {
      this.user = user;
    })
  }

}
