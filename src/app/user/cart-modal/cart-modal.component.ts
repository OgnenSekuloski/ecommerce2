import { Component, Input, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../admin/products/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css',
})
export class CartModalComponent {
  @Input() cart: Product[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss('Close click');
  }

  getUniqueItems(cart: Product[]): Product[] {
    const uniqueIds = new Set(cart.map((item) => item.id));
    const uniqueItems: Product[] = [];
    uniqueIds.forEach((id) => {
      const item = cart.find((cartItem) => cartItem.id === id);
      if (item) {
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  }

  getItemCount(item: Product): number {
    return this.cart.filter((cartItem) => cartItem.id === item.id).length;
  }

  removeItem(item: Product): void {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
}
