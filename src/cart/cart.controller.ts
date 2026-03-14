import { Controller, Get, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Get()
  getCarts() {
    return this.cartService.getAllCarts();
  }
  @Get(':id')
  getCart(@Param('id') id: string) {
    return this.cartService.getCartById(Number(id));
  }
}
