import { UserUpdateManyWithoutTenantsInput } from "./UserUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  users?: UserUpdateManyWithoutTenantsInput;
};
