import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    { id: 1, name: 'Bob', role: 'Admin' },
    { id: 2, name: 'Tom', role: 'Supervisor' },
    { id: 3, name: 'Sam', role: 'Manager' },
  ];

  getAllUsers() {
    return this.users;
  }
}
