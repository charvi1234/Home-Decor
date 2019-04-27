import { Injectable } from '@angular/core';
import {Shop} from './shop.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) { }
  public userList: Shop[];

  _url = 'http://localhost:3000/addNewUser'; 
  addNewUser(newUser: Shop) {
    return this.httpClient.post<any>(this._url, newUser);
  }

}