import { useNavigate } from 'react-router-dom';
import { MyCourseSection } from '../../../components/my-courses-section';
import styles from './index.module.scss';
import { Course } from '@abdala/models';
import { useEffect, useState } from 'react';
import { userClient } from '../../../clients';
import { authenticator } from '../../../lib';



export function MyCoursesPage() {
  const navigate = useNavigate();
  const [booting, setBooting] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleBoot = async () => {
    const userId = authenticator.getUserInfo().sub;
    const mySubscriptions = await userClient.getSubscriptions(userId);

    setCourses(mySubscriptions);

    setTimeout (() => {
      setBooting(false);
    },2000);
  };

  useEffect (() => {
    handleBoot();
    return () => {
      //
    };
  }, []);

  if (booting) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.root}>
      <h1>Subscriptions :</h1>

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
