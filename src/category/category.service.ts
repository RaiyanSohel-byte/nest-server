import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategories() {
    return ['Mobile', 'PC', 'Headphones', 'Tablets'];
  }
}
