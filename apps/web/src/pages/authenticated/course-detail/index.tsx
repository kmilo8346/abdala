import { Course } from '@abdala/models';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components/button/suscribe';
import styles from './index.module.scss';
import { courseClient } from '../../../clients';

const courses: Course[] = [];

export function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<Course>();
  const [booting, setBooting] = useState(true);

  const handleBoot = async () => {
    const getDetails = await courseClient.getById(id!)
    // Buscar el curso en el backend usando el id
    // Cuando lo obtiene lo pone en el estado
    
    
    setCourse(getDetails);

    setTimeout(() => {
      setBooting(false);
    }, 2000);
  };

  useEffect(() => {
    handleBoot();
    return () => {
      // 
    };
  });

  if (booting) {
    return <h1>Loading...</h1>;
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>{course!.name}</h1>
        <Button onClick={() => {}} />
      </div>

      {/* {course.modules.map((module) => (
        <>
          <h2>{module.name}</h2>
          <div className={styles.modules}>
            {module.lessons.map((lesson, index) => (
              <Cards
                key={index}
                name={lesson.name}
                imgUrl={lesson.image_url}
                onClick={() => {}}
              />
            ))}
          </div>
        </>
      ))} */}
    </div>
  );
}

export default CourseDetailPage;
