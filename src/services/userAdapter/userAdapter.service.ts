import { Injectable } from '@nestjs/common';
import { Role, User, UserService } from '../../auth/types';

@Injectable()
export class UserAdapterService implements UserService {
  constructor() {}

  async findOrCreate(id: string | number): Promise<User> {
    return Promise.resolve({ id: 'someUid', role: Role.USER });
  }
}
