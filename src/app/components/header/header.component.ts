import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartModelServer} from "../../models/cart.model";
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from './../../services/auth.service';
import{LoginComponent} from './../login/login.component'
@Component({
  selector: 'mg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;
  isLogin: boolean;
  private _auth: any;
  private _router: any;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
  this.cartService.cartTotal$.subscribe(total => {
    this.cartTotal = total;
  });

  this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }


  isUserLogin(){
    if(this._auth.getUserDetails() != null){
    this.isLogin = true;
    }
    }
    logout(){
      this._auth.clearStorage()
      this._router.navigate(['']);
      }
}
