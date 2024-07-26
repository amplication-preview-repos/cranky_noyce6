import { Injectable } from "@nestjs/common";

@Injectable()
export class TenantManagementService {
  constructor() {}
  async AuthGuard(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GlobalMiddleware(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async InputValidation(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RequestLoggingInterceptor(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
