import { IJwtPayload, IJwtToken } from '@abdala/models';
import { jwtDecode } from 'jwt-decode';

const AUTH_KEY = '@AUTH';

interface IState {
  auth: IJwtToken;
  user: IJwtPayload;
}

class Authenticator {
  private state: IState | null;

  constructor() {
    this.state = null;
  }

  async boot(): Promise<void> {
    const auth = this.getAuthFromStorage();
    if (auth !== null) {
      const user = jwtDecode<IJwtPayload>(auth.access_token);
      this.state = { auth, user };
    }
  }

  getAuthFromStorage(): IJwtToken | null {
    const value = localStorage.getItem(AUTH_KEY);
    if (value === null) {
      return null;
    }

    return JSON.parse(value);
  }

  signIn(auth: IJwtToken) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));

    const user = jwtDecode<IJwtPayload>(auth.access_token);

    this.state = {
      auth,
      user,
    };
  }

  signOut() {
    localStorage.removeItem(AUTH_KEY);

    this.state = null;
  }

  isAuthenticated(): boolean {
    return this.state !== null;
  }

  getUserInfo(): IJwtPayload {
    if (this.state === null) {
      throw new Error('User is not authenticated');
    }

    return this.state.user;
  }
}

export const authenticator = new Authenticator();
