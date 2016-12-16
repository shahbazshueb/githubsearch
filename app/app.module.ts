import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfileComponent } from "./profile/profile.component";
import { ProfileService } from "./profile/profile.service";
import { HttpModule } from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProfileService]
})
export class AppModule { }
