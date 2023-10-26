import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  customers = [
    {
      id: 1,
      name: 'Madam G',
      address: 'NG',
    },
    {
      id: 2,
      name: 'Baba Blue',
      address: 'GH',
    },
    {
      id: 3,
      name: 'Bomboy',
      address: 'TGB',
    },
  ];

  getAllCustomer() {
    return this.customers;
  }
}
