import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TenantManagementService } from "./tenantmanagement.service";

@swagger.ApiTags("tenantManagements")
@common.Controller("tenantManagements")
export class TenantManagementController {
  constructor(protected readonly service: TenantManagementService) {}

  @common.Post("/authorize")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthGuard(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AuthGuard(body);
      }

  @common.Post("/process-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GlobalMiddleware(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GlobalMiddleware(body);
      }

  @common.Post("/validate-input")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InputValidation(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.InputValidation(body);
      }

  @common.Post("/log-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RequestLoggingInterceptor(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RequestLoggingInterceptor(body);
      }
}
