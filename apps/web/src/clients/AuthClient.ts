import { IJwtToken } from '@abdala/models';
import RESTClient from '../lib/RESTClient';

class AuthClient extends RESTClient {
  async login(username: string, password: string): Promise<IJwtToken> {
    const response = await this.axios.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  }
}

export const authClient = new AuthClient({
  baseURL: 'http://localhost:3100/v1',
});
