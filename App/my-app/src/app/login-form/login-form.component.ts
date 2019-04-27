import { Component, OnInit } from '@angular/core';
import {Shop} from '../shop.model';
import{ShopService} from './../shop.service'
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model = new Shop('','','','','');
  constructor(private auth: AuthService, private _router : Router) { }
  ngOnInit() {
  }

  onSubmit()
  {
    //  console.log(this.model);
    this.auth.registerUser(this.model)
    .subscribe(
      res => { 
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/checkout'])
      },
      err => console.log(err)
    )
   }
}