import { createPermissionIntegrationRouter, DefaultPermissionPolicy, PolicyDecision } from '@backstage/plugin-permission-backend';
  import { Router } from 'express';
  import { catalogEntityReadPermission } from '@backstage/plugin-catalog-common/permissions';
  
  export class AllowAllPolicy extends DefaultPermissionPolicy {
    async handle(request: { permission: any }): Promise<PolicyDecision> {
      // Allow guest users to read catalog entities
      if (request.permission === catalogEntityReadPermission) {
        return { result: 'allow' };
      }
      return { result: 'deny' };
    }
  }
  
  export function createPlugin(env: any): Router {
    return createPermissionIntegrationRouter({
      policy: new AllowAllPolicy(),
      identityClient: env.identity,
    });
  }
  