import { User } from "../user/User";

export type Tenant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
};
