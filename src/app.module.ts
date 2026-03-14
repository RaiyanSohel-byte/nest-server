import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CartService } from './cart/cart.service';
import { CartController } from './cart/cart.controller';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UserController, ProductController, CartController],
  providers: [AppService, ProductService, CartService],
})
export class AppModule {}
