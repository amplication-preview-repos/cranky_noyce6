import { Module } from "@nestjs/common";
import { TenantManagementService } from "./tenantmanagement.service";
import { TenantManagementController } from "./tenantmanagement.controller";
import { TenantManagementResolver } from "./tenantmanagement.resolver";

@Module({
  controllers: [TenantManagementController],
  providers: [TenantManagementService, TenantManagementResolver],
  exports: [TenantManagementService],
})
export class TenantManagementModule {}
