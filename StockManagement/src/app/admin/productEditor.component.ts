import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm, NgModel } from "@angular/forms";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

import { from } from 'rxjs';

@Component({
 templateUrl: "productEditor.component.html",
 styleUrls: ['./edit.css']
})
export class ProductEditorComponent {
 editing: boolean = false;
 product: Product = new Product();
 formnotvalid = 0;
 constructor(private repository: ProductRepository,
 private router: Router,
 activeRoute: ActivatedRoute) {
 this.editing = activeRoute.snapshot.params["mode"] == "edit";
 if (this.editing) {
 Object.assign(this.product,
 repository.getProduct(activeRoute.snapshot.params["id"]));
 }
 }
 save(form: NgForm) {
     if(form.invalid){
        this.formnotvalid = 1;
     }else{
         this.formnotvalid = 0;
 this.repository.saveProduct(this.product);
 this.router.navigateByUrl("/admin/main/products");
     }
 }
}