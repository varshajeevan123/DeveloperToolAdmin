import { createApiRef, IdentityApi, BackstageUserIdentity, ProfileInfo } from '@backstage/core-plugin-api';

export const guestAuthApiRef = createApiRef<IdentityApi>({
  id: 'guest-auth-provider',
});

export class GuestAuthProvider implements IdentityApi {
  getProfileInfo(): Promise<ProfileInfo> {
      throw new Error('Method not implemented.');
  }
  async getBackstageIdentity(): Promise<BackstageUserIdentity> {
    return {
      type: 'user', // Required field
      userEntityRef: 'user:guest', // Correctly formatted reference
      ownershipEntityRefs: [], // No ownership for guests
      // Indicates this is a guest login
    };
  }

  async getProfile(): Promise<{ displayName?: string; email?: string; picture?: string }> {
    return {
      displayName: 'Guest User',
      email: 'guest@example.com',
      picture: '', // No profile picture
    };
  }

  async getCredentials(): Promise<{ token?: string }> {
    return { token: 'guest-token' };
  }

  async signOut(): Promise<void> {
    
  }
}