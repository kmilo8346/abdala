import { Course } from '@abdala/models';
import { Button } from '../../components/button/suscribe';
import { Cards } from '../../components/cards';
import styles from './index.module.scss';

interface ICourseSectionProps {
  data: Course;
  onClick: () => void;
}

export function CourseSection(props: ICourseSectionProps) {
  const { data, onClick } = props;
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <Cards name={data.name} imgUrl={data.image} onClick={onClick} />
        <div className={styles.info}>
          <p>{data.description}</p>
          <Button onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
export default CourseSection;
