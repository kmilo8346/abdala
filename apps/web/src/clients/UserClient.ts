import { Course, User } from '@abdala/models';
import RESTClient from '../lib/RESTClient';

class UserClient extends RESTClient {
  async signUp(
    name: string,
    username: string,
    password: string
  ): Promise<User> {
    const response = await this.axios.post('/users', {
      name,
      username,
      password,
    });
    return response.data;
  }

  async getCreations(userId: string): Promise<Course[]> {
    const response = await this.axios.get(`/users/${userId}/creations`);
    return response.data;
  }
}

export const userClient = new UserClient({
  baseURL: 'http://localhost:3100/v1',
});


// getSubscriptions(userId)
  // getCreations(userId) *HECHO*