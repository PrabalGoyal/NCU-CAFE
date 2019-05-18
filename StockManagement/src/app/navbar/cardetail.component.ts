import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';

@Component({
    // template:`<div>
    // <h3 class="bg-info p-1 text-white">Cart Detail components</h3>
    // </div>`
    templateUrl:"cartDetail.component.html",
styleUrls: ['./cartDetail.component.css']

})
export class CartDetailComponent {
    constructor(public cart: Cart){}
}