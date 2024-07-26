import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TenantWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
