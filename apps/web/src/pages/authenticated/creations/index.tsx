import { useNavigate } from 'react-router-dom';
import { CourseSection } from '../../../components/course-section';
import styles from './index.module.scss';
import { Course } from '@abdala/models';
import { authenticator } from '../../../lib';
import { useEffect, useState } from 'react';

export function CreationsPage() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleBoot = async () => {
    const userId = authenticator.getUserInfo().sub;

    console.log(userId);
  };

  useEffect(() => {
    handleBoot();
  }, []);

  return (
    <div className={styles.root}>
      <h1>My Creations :</h1>

      {courses?.map((course) => (
        <CourseSection
          key={course._id}
          data={course}
          onClick={() => handleNavigate(`/courses/${course._id}`)}
        />
      ))}
    </div>
  );
}

export default CreationsPage;
