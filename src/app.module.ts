import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CartService } from './cart/cart.service';
import { CartController } from './cart/cart.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { TeacherModule } from './teacher/teacher.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [
    EmployeeModule,
    CategoryModule,
    StudentModule,
    CustomerModule,
    TeacherModule,
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    CartController,
    TeacherController,
    MynameController,
  ],
  providers: [AppService, ProductService, CartService, TeacherService],
})
export class AppModule {}
