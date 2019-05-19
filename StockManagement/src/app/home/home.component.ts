import { ProductRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
public selectedCategory = null;
public selectedPage = 1;
public productsPerPage = 8;
  itemCount: number;
  lines: any;

  constructor(private repository: ProductRepository, private cart: Cart, private router: Router) { }
  get products(): Product[]{
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex,pageIndex + this.productsPerPage);

  }
  get categories(): string[]{
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string){
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number){
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number){
    this.productsPerPage = Number(newSize);
    this.changePageSize(1);
  }
  get pageNumber(): number[]{
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x,i) => i + 1);
  }

  get pagebackNumber(): number[]{
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x,i) => i - 1);
  }


  addProductToCart(product: Product){
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }


  ngOnInit() { 
  }
}