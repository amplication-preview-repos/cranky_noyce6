import * as graphql from "@nestjs/graphql";
import { TenantManagementService } from "./tenantmanagement.service";

export class TenantManagementResolver {
  constructor(protected readonly service: TenantManagementService) {}

  @graphql.Mutation(() => String)
  async AuthGuard(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AuthGuard(args);
  }

  @graphql.Mutation(() => String)
  async GlobalMiddleware(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GlobalMiddleware(args);
  }

  @graphql.Mutation(() => String)
  async InputValidation(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.InputValidation(args);
  }

  @graphql.Mutation(() => String)
  async RequestLoggingInterceptor(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RequestLoggingInterceptor(args);
  }
}
