export enum Role {
  SYSADMIN = 'SYSADMIN',
  ORGANIZATION_ADMIN = 'ORGANIZATION_ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export interface AuthUser {
  id?: string | number;
  active?: boolean;
  organization?: string | number;
  role: Role;
}

export interface ModifiedRequest extends Request {
  user: AuthUser;
}

export interface ModifiedContext {
  req: Request;
  res: any;
  user: AuthUser;
}

export interface User {
  id: string;
  role: Role;
}

export interface UserService {
  findOrCreate: (id: string | number) => Promise<User>;
}
