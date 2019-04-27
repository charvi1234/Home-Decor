import { Component, OnInit } from '@angular/core';
import {Shop} from '../shop.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  model = {}
  constructor(private auth: AuthService, private _router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.auth.loginUser(this.model)
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
