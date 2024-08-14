import styles from './index.module.scss';
import { Cards } from '../../../components/cards';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components';
import { ICourse } from 'apps/web/src/types/ICourse';
import courses from '../../../db/CoursesList';

interface ICourseSectionProps {
  data: ICourse;
  onClick: () => void;
}

function CourseSection(props: ICourseSectionProps) {
  const { data, onClick } = props;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        marginBottom: '100px',
      }}
    >
      <h2
        style={{
          textAlign: 'left',
          fontSize: '30px',
        }}
      >
        {data.name}
      </h2>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <Cards name={data.name} imgUrl={data.image_url} onClick={onClick} />
        <div className={styles.info}>
          <p>{data.description}</p>
          <Button onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export function CoursesPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.root}>
      <h1>Courses</h1>

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

export default CoursesPage;
