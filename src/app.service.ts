import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDemo(): string {
    return 'Just a demo endpoint still';
  }
}
