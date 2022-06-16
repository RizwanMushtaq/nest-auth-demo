import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Rizwan',
      username: 'riz',
      password: '123456',
    },
    {
      id: 2,
      name: 'Usman',
      username: 'usman',
      password: '123',
    },
  ];

  async findOne(username: string): Promise<User> | undefined {
    return this.users.find((user) => user.username === username);
  }
}
