import { Course, ICollection, SearchCoursesParams } from '@abdala/models';
import RESTClient from '../lib/RESTClient';

class CourseClient extends RESTClient {
  async getAll(params: SearchCoursesParams): Promise<ICollection<Course>> {
    const response = await this.axios.get('/courses', {
      params,
    });
    return response.data;
  }

  async getById(id: string): Promise<Course> {
    const response = await this.axios.get(`/courses/${id}`,);
    return response.data;
  }

  // get by id
}

export const courseClient = new CourseClient({
  baseURL: 'http://localhost:3100/v1',
});
