import { useNavigate } from 'react-router-dom';
import { MyCourseSection } from '../../../components/my-courses-section';
import styles from './index.module.scss';
import { Course } from '@abdala/models';

const courses: Course[] = [];

export function MyCoursesPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.root}>
      <h1>My Courses :</h1>

      {courses.length === 0 ? (
        <p className={styles.nota}> You have not subscribed to any courses yet.</p> 
      ) : (
        courses.map((course) => (
          <MyCourseSection
            key={course._id} 
            data={course}
            onClick={() => handleNavigate(`/courses/${course._id}`)}
          />
        ))
      )}
    </div>
  );
  
}

export default MyCoursesPage;
