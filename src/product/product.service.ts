import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Phone', price: 20000 },
    { id: 2, name: 'Laptop', price: 60000 },
    { id: 3, name: 'Desktop', price: 40000 },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
