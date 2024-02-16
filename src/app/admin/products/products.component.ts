import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PRODUCTS } from './db-products';
import { Product } from './interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input()
  product: Product = {} as Product;
  
  visibleSidePanel:boolean = false;
  productObject = PRODUCTS;
  

  addProduct(): void {
    const newProduct = {
      id: this.productObject.length + 1,
      album_name: this.productObject.album_name,
      price: this.productObject.price,
      genre: this.productObject.genre,
      artist: this.productObject.artist,
      description: this.productObject.description,
      image: this.productObject.image
    };
    this.productObject.push(newProduct);
  }

  removeProduct(productToRemove: Product): void {
    const index = this.productObject.findIndex((product: Product) => product === productToRemove);
  
    if (index !== -1) {
      this.productObject.splice(index, 1);
    }
  }

  openSidePanel(): void {
    this.visibleSidePanel = true;
  }
  
  closeSidePanel(): void {
    this.visibleSidePanel = false;
  }
  

}
