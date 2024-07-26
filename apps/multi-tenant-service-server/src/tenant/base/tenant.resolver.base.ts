/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Tenant } from "./Tenant";
import { TenantCountArgs } from "./TenantCountArgs";
import { TenantFindManyArgs } from "./TenantFindManyArgs";
import { TenantFindUniqueArgs } from "./TenantFindUniqueArgs";
import { CreateTenantArgs } from "./CreateTenantArgs";
import { UpdateTenantArgs } from "./UpdateTenantArgs";
import { DeleteTenantArgs } from "./DeleteTenantArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { TenantService } from "../tenant.service";
@graphql.Resolver(() => Tenant)
export class TenantResolverBase {
  constructor(protected readonly service: TenantService) {}

  async _tenantsMeta(
    @graphql.Args() args: TenantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Tenant])
  async tenants(@graphql.Args() args: TenantFindManyArgs): Promise<Tenant[]> {
    return this.service.tenants(args);
  }

  @graphql.Query(() => Tenant, { nullable: true })
  async tenant(
    @graphql.Args() args: TenantFindUniqueArgs
  ): Promise<Tenant | null> {
    const result = await this.service.tenant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tenant)
  async createTenant(@graphql.Args() args: CreateTenantArgs): Promise<Tenant> {
    return await this.service.createTenant({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tenant)
  async updateTenant(
    @graphql.Args() args: UpdateTenantArgs
  ): Promise<Tenant | null> {
    try {
      return await this.service.updateTenant({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tenant)
  async deleteTenant(
    @graphql.Args() args: DeleteTenantArgs
  ): Promise<Tenant | null> {
    try {
      return await this.service.deleteTenant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User], { name: "users" })
  async findUsers(
    @graphql.Parent() parent: Tenant,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}