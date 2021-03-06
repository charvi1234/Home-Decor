import { Component, OnInit } from '@angular/core';
import {Cart} from './../interfaces/cart';
import {CartDataService} from './../cart-data.service'
@Component({
  selector: 'app-bed-page',
  templateUrl: './bed-page.component.html',
  styleUrls: ['./bed-page.component.css']
})
export class BedPageComponent implements OnInit {
  private newCart: Cart= {
    productName:"oldvalue",
    Quantity:0,
    Price:0,
  };
  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
  }
  submitCart(name : string, qty : number, pr : number, un : number){
    this.newCart.productName = name;
    this.newCart.Quantity = qty;
    this.newCart.Price = pr;
    this.newCart.uni = un;
    console.log(`The new product is : ${this.newCart.productName}`);
    let dataObject = JSON.parse(JSON.stringify(this.newCart));
    this.cartDataService.addNewProduct(dataObject);
    return this.cartDataService.getTotal(pr);
  }
}
