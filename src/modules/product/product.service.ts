import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  products = [
    {
      id: 1,
      name: 'Rice',
      price: '270',
    },
    {
      id: 1,
      name: 'Indomie',
      price: '110',
    },
    {
      id: 1,
      name: 'Goat',
      price: '300',
    },
  ];
  getAllProducts() {
    return this.products;
  }
}
