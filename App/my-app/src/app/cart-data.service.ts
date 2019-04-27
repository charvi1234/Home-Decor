import { Injectable } from '@angular/core';
import  { Cart } from "./interfaces/cart";
@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }
  public cartList: Cart[] =[{
    productName:"none",
    Quantity:0,
    Price:0,
  }
];
public  getLatestCart() {
  return this.cartList;
}
public Total = 0;
public TotalPr = 0;
public addNewProduct(newCart: Cart){
  this.cartList.push(newCart);
}
public getTotal(ind : number)
{
  this.Total=this.Total+1;
  console.log(`The new total is : ${this.Total}`);
  this.getTotPr1(ind);
  return this.Total;
}
public getTotal1()
{
  return this.Total;
} 
public setTot(pr : number)
{
  this.Total=this.Total-1;
  console.log(`The new total is : ${this.Total}`);
  this.getTotPr2(pr);
  return this.Total;
}
public getTotPrice()
{
  return this.TotalPr;
}
public getTotPr1(ind : number)
{
  //this.TotalPr = 0;
  //for (var i = 1; i <= this.cartList.length; i++) {
    //var item = this.cartList[i];
    //if(item.uni == ind)
    this.TotalPr = this.TotalPr+ind;
    console.log(`The price is : ${ind}`);
    console.log(`The new total price is : ${this.TotalPr}`);
    
  //}
  return this.TotalPr;  
}

public getTotPr2(pr : number)
{
  //for (var i = 1; i <= this.cartList.length; i++) {
    //var item = this.cartList[i];
    //if (item.uni == ind) {
        this.TotalPr = this.TotalPr-pr;
        console.log(`The new total price is : ${this.TotalPr}`);
    return this.TotalPr;
    //}
  //}
}

}