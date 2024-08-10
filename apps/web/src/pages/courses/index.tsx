import styles from './index.module.scss';
import { Cards } from '../../components/cards'
import { useNavigate } from 'react-router-dom';
import HTML from "../../assets/cursos/front-end/HTML.png"
import BE from "../../assets/cursos/back-end/B-E.png"
import { Button } from '../../components';



interface CoursesList {
  id: string;
  name: string;
  imgUrl: string;
  
}

const courseFrontEnd: CoursesList[] = [
  {id: "FrontEnd", name: "FrontEnd", imgUrl: HTML },
]

const courseBackEnd: CoursesList[] = [
  {id: "BackEnd", name: "BackEnd", imgUrl: BE },
]


export function CoursesPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.root}>
       <h1>Courses</h1>
       
        
        <h2>Front-End</h2>
      <div className={styles.FrontEnd}>
          
          {courseFrontEnd.map((item, index) => (
            
            <Cards
              key={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              onClick={() => handleNavigate('/courseFrontEnd')}
            /> 
          ))}
          <div className={styles.info}>
          <p> Front End: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit iusto aliquid! Optio consequatur temporibus repudiandae blanditiis mollitia cumque ea dolores molestias 
            laboriosam suscipit reiciendis, possimus ipsum. Aliquid, saepe rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque numquam aliquam eligendi unde sint quas, ullam quae, ad beatae similique, aut 
            asperiores excepturi voluptatibus repellat ea deleniti eveniet officiis nesciunt.</p>
          <Button />
          </div>
      </div>

        <h2>Back-End</h2>
      <div className={styles.BackEnd}>
        
          
          {courseBackEnd.map((item, index) => (
            <Cards
              key={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              onClick={() => handleNavigate('/courseBackEnd')}
            />
          ))}
          <div className={styles.info}>
          <p> Back End: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sit iusto aliquid! Optio consequatur temporibus repudiandae blanditiis mollitia cumque ea dolores molestias 
            laboriosam suscipit reiciendis, possimus ipsum. Aliquid, saepe rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque numquam aliquam eligendi unde sint quas, ullam quae, ad beatae similique, aut 
            asperiores excepturi voluptatibus repellat ea deleniti eveniet officiis nesciunt.</p>
          <Button />
          </div>
      </div>

      </div>
   
     
  )
}
    
  

export default CoursesPage;
