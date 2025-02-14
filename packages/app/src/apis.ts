// import {
//   ScmIntegrationsApi,
//   scmIntegrationsApiRef,
//   ScmAuth,
// } from '@backstage/integration-react';
// import {
//   AnyApiFactory,
//   configApiRef,
//   createApiFactory,
// } from '@backstage/core-plugin-api';

// export const apis: AnyApiFactory[] = [
//   createApiFactory({
//     api: scmIntegrationsApiRef,
//     deps: { configApi: configApiRef },
//     factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
//   }),
//   ScmAuth.createDefaultApiFactory(),
// ];

import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
} from '@backstage/core-plugin-api';
import { guestAuthApiRef, GuestAuthProvider } from './GuestAuthProvider';

// import { guestAuthApiRef } from './GuestAuthProvider'; // ✅ Import GuestAuthProvider
// import { GuestAuthProvider } from './GuestAuthProvider'; // ✅ Import the class

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),

  // ✅ Add GuestAuthProvider to the API registry
  createApiFactory({
    api: guestAuthApiRef,
    deps: {},
    factory: () => new GuestAuthProvider(),
  }),
];