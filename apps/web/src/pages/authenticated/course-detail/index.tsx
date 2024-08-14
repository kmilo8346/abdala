import { ICourse } from 'apps/web/src/types/ICourse';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../../components';
import { Cards } from '../../../components/cards';
import courses from '../../../db/CoursesList';
import styles from './index.module.scss';

export function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourse>();

  const handleBoot = async () => {
    // Buscar el curso en el backend usando el id
    // Cuando lo obtiene lo pone en el estado
    console.log(`Obtieniendo el curso para el id: ${id}`);
    const found = courses.find((course: ICourse) => course.id === id);
    setCourse(found);
  };

  useEffect(() => {
    handleBoot();
  }, []);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>{course.name}</h1>
        <Button onClick={() => {}} />
      </div>

      {course.modules.map((module) => (
        <>
          <h2>{module.name}</h2>
          <div className={styles.HTML}>
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
      ))}
    </div>
  );
}

export default CourseDetailPage;
