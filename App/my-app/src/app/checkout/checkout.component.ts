import { Component, OnInit } from '@angular/core';
import { Cart } from "./../interfaces/cart";
import { CartDataService } from './../cart-data.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public cartList: Cart[];
  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    this.cartList = this.cartDataService.getLatestCart();
  }
  public getTot()
  {
    return this.cartDataService.getTotal1();
  }
  public remove(ind : number)
  {
    for (var i = 1; i <= this.cartList.length; i++) {
      var item = this.cartList[i];
      if (item.uni == ind) {
          this.cartList.splice(i, 1);
          return this.cartDataService.setTot(item.Price);
      }
    }
  }
  public getTotPr()
  {
    return this.cartDataService.getTotPrice();
  }
}
