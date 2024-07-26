import { InputJsonValue } from "../../types";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  tenant?: TenantWhereUniqueInput | null;
};
