import { useNavigate } from 'react-router-dom';
import { CourseSection } from '../../../components/course-section';
import courses from '../../../db/CoursesList';
import styles from './index.module.scss';

export function CreationsPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.root}>
      <h1>My Creations :</h1>

      {courses.map((course) => (
        <CourseSection
          key={course.id}
          data={course}
          onClick={() => handleNavigate(`/courses/${course.id}`)}
        />
      ))}
    </div>
  );
}

export default CreationsPage;
