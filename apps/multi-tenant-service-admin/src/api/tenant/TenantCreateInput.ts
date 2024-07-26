import { UserCreateNestedManyWithoutTenantsInput } from "./UserCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  users?: UserCreateNestedManyWithoutTenantsInput;
};
