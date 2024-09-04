import { Injectable } from '@nestjs/common';
import { Role, User } from '../../auth/types';

@Injectable()
export class UserAdapterService {
  constructor() {}

  async findOrCreate(id: string): Promise<User> {
    return Promise.resolve({ id: 'someUid', role: Role.USER });
  }
}
