import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private cusService: CustomerService) {}

  @Get('/')
  getAllCustomers() {
    return this.cusService.getAllCustomer();
  }
}
