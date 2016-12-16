import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  private username: string;

  constructor(private http: Http){
    this.username='shahbazshueb';
  }
  getUser(){
    return this.http.get(`http://api.github.com/users/${this.username}`)
      .map(res=>res.json())
  }
}

