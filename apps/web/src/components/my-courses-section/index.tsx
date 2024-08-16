import styles from './index.module.scss';
import { Cards } from '../../components/cards';
import { useNavigate } from 'react-router-dom';
import { ButtonSuscribed } from '../../components/button/suscribed';
import { ICourse } from 'apps/web/src/types/ICourse';
import courses from '../../db/CoursesList';


interface ICourseSectionProps {
  data: ICourse;
  onClick: () => void;
}

export function MyCourseSection(props: ICourseSectionProps) {
  const { data, onClick } = props;
  return (
    <div className={styles.root}>
      
      <div className={styles.body}>
        <Cards name={data.name} imgUrl={data.image_url} onClick={onClick} />
        <div className={styles.info}>
          <p>{data.description}</p>
          <ButtonSuscribed onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
export default MyCourseSection;

