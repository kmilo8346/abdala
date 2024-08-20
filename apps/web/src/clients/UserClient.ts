import { IJwtToken } from '@abdala/models';
import RESTClient from '../lib/RESTClient';

class UserClient extends RESTClient {
  async signUp(name: string, username: string, password: string): Promise<IJwtToken> {
    const response = await this.axios.post('/users', {
      name,
      username,
      password,
    });
    return response.data;
  }
}

export const userClient = new UserClient({
  baseURL: 'http://localhost:3100/v1',
});
