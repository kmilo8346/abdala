import { useNavigate } from 'react-router-dom';
import { CourseSection } from '../../../components/course-section';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { userClient } from '../../../clients';
import { Course } from '@abdala/models';
import { authenticator } from '../../../lib';

export function CreationsPage() {
  const navigate = useNavigate();
  const [booting, setBooting] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]); 

  const handleNavigate = (path: string) => {
    navigate(path);
  };


  const handleBoot = async () => {
    const userId = authenticator.getUserInfo().sub;
    const myCreation = await userClient.getCreations(userId);

    
    setCourses(myCreation);
    
    
    setTimeout(() => {
      setBooting(false);
    }, 2000);
  };

  useEffect(() => {
    handleBoot();
    return () => {
      // console.log('Componente se desmontó');
    };
  }, []);

  if (booting) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.root}>
      <h1>My Creations :</h1>

      {courses.length === 0 ? (
        <p className={styles.nota}> You have not created any courses yet.</p> 
      ) : (
        courses.map((course) => (
          <CourseSection
            key={course._id} 
            data={course}
            onClick={() => handleNavigate(`/courses/${course._id}`)}
          />
        ))
      )}
    </div>
  );
}


export default CreationsPage;
