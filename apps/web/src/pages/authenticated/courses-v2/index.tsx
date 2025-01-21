import { useNavigate } from 'react-router-dom';
import { CourseSection } from '../../../components/course-section';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { courseClient } from '../../../clients';
import { Course, ICollection } from '@abdala/models';
import { Col, Row } from 'antd';

export function CoursesPage() {
  const navigate = useNavigate();
  const [booting, setBooting] = useState(true);
  const [courses, setCourses] = useState<ICollection<Course>>();

  const handleBoot = async () => {
    setBooting(true);
    const courses = await courseClient.getAll({
      from: 0,
      size: 10,
    });
    setCourses(courses);

    setTimeout(() => {
      setBooting(false);
    }, 2000);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    // console.log('Componente se montó');
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
      <h1>Courses :</h1>

      
    </div>
  );
}

export default CoursesPage;
