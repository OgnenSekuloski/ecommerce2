import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from '../../admin/products/db-products';
import { Product } from '../../admin/products/interface';
import { RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, CartModalComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  @Input()
  product: Product = {} as Product;
  productObject = PRODUCTS;

  cart: Product[] = [];

  constructor(private modalService: NgbModal) {
    this.productObject = PRODUCTS;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  openCartModal() {
    const modalRef = this.modalService.open(CartModalComponent);
    modalRef.componentInstance.cart = this.cart;
  }

}
