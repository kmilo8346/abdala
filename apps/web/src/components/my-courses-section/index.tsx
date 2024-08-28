import { Course } from '@abdala/models';
import { ButtonSuscribed } from '../../components/button/suscribed';
import { Cards } from '../../components/cards';
import styles from './index.module.scss';

interface ICourseSectionProps {
  data: Course;
  onClick: () => void;
}

export function MyCourseSection(props: ICourseSectionProps) {
  const { data, onClick } = props;
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <Cards name={data.name} imgUrl={data.image} onClick={onClick} />
        <div className={styles.info}>
          <p>{data.description}</p>
          <ButtonSuscribed onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
export default MyCourseSection;
