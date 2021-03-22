import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }


  //productService: any;
  ngOnInit(): void {
    this.getAllProducts2;
    this.getProducts;
    this.addTable;
  }
  addTable() {
    const product = {
      imagePath: '',
      title: '',
      description: '',
      price:0,
    }
   // this.productss.push(product)
console.log(this.productss);

  }
  
  deleteRow(x){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.productss.splice(x, 1 );
    }   
  } 
  productss;
//console.log(this.productss);

  getProducts(){
    this.productService.getAllProducts().subscribe((products)=>{
     // console.log(prods)
      this.productss = products;
      console.log("pro",products);
     // console.log(prods['data'].products);
    },err=>{
      console.log(err);
  
    })}

    getAllProducts2(){
      this.productService.getAllProducts().subscribe(
        (products)=>{
          console.log("products",products)
         this.productss = products     },
        (err)=>{
          console.log(err)
        }
      )
    }

  



}
