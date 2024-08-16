import { useNavigate } from 'react-router-dom';
import { MyCourseSection } from '../../../components/my-courses-section';
import courses from '../../../db/CoursesList';
import styles from './index.module.scss';

export function MyCoursesPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.root}>
      <h1>MY Courses :</h1>

      {courses.map((course) => (
        <MyCourseSection
          key={course.id}
          data={course}
          onClick={() => handleNavigate(`/courses/${course.id}`)}
        />
      ))}
    </div>
  );
}

export default MyCoursesPage;
