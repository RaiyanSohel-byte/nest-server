import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private carts = [
    { id: 3, product: 'Banana', price: 30 },
    { id: 4, product: 'Apple', price: 50 },
    { id: 5, product: 'Pine Apple', price: 70 },
    { id: 6, product: 'Water', price: 20 },
  ];
  getAllCarts() {
    return this.carts.map((cart) => cart.product);
  }
  getCartById(id: number) {
    return this.carts.find((cart) => cart.id === id);
  }
}
