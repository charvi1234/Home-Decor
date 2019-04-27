import { Component, OnInit } from '@angular/core';
import {Cart} from './../interfaces/cart';
import {CartDataService} from './../cart-data.service'
import { CheckoutComponent } from '../checkout/checkout.component';
@Component({
  selector: 'app-sofasand-loungers-page',
  templateUrl: './sofasand-loungers-page.component.html',
  styleUrls: ['./sofasand-loungers-page.component.css']
})
export class SofasandLoungersPageComponent implements OnInit {
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
