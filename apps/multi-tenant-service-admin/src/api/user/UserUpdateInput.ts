import { InputJsonValue } from "../../types";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tenant?: TenantWhereUniqueInput | null;
};
