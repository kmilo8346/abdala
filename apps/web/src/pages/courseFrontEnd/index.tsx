import styles from './index.module.scss';
import { Cards } from '../../components/cards'
import HTML from "../../assets/cursos/front-end/HTML.png"
import HTML1 from "../../assets/cursos/front-end/HTML1.png"
import HTML2 from "../../assets/cursos/front-end/HTML2.png"
import HTML3 from "../../assets/cursos/front-end/HTML3.png"
import CSS from "../../assets/cursos/front-end/CSS.png"
import CSS1 from "../../assets/cursos/front-end/CSS1.png"
import CSS2 from "../../assets/cursos/front-end/CSS2.png"
import CSS3 from "../../assets/cursos/front-end/CSS3.png"
import JavaScr from "../../assets/cursos/front-end/JavaScr.png"
import JS from "../../assets/cursos/front-end/JS.png"
import JS1 from "../../assets/cursos/front-end/JS1.png"
import JS2 from "../../assets/cursos/front-end/JS2.png"
import { Button } from '../../components';



interface CoursesList {
  id: string;
  name: string;
  imgUrl: string;
  
}

const coursesHTML: CoursesList[] = [
  {id: "Introduccion a HTML", name: "Introduccion a HTML", imgUrl: HTML },
  {id: "Entendiendo HTML", name: "Entendiendo  HTML", imgUrl: HTML1 },
  {id: "Creando con HTML", name: "Creando con HTML", imgUrl: HTML2 },
  {id: "Creando con HTML parte 2", name: "Creando con HTML parte 2", imgUrl: HTML3 },
]

const coursesCss: CoursesList[] = [
  {id: "Introduccion a CSS", name: "Introduccion a CSS", imgUrl: CSS },
  {id: "Entendiendo CSS", name: "Entendiendo  CSS", imgUrl: CSS1 },
  {id: "Estilizando con CSS", name: "Estilizando con CSS", imgUrl: CSS2 },
  {id: "CSS Avanzado", name: "CSS Avanzado", imgUrl: CSS3 },
]

const coursesJavaScript: CoursesList[] = [
  {id: "Introduccion a JavaScript", name: "Introduccion a JavaScript", imgUrl: JS },
  {id: "Entendiendo JavaScript", name: "Entendiendo  JavaScript", imgUrl: JS1 },
  {id: "Codificando con JavaScript", name: "Codificando con JavaScript", imgUrl: JS2 },
  {id: "REACT", name: "REACT", imgUrl: JavaScr },
]

export function CourseFrontEnd() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
      <h1>Front-End</h1>
      <Button />
      </div>
      
      
      <h2>HTML</h2>
      <div className={styles.HTML}>
        
        {coursesHTML.map((item, index) => (
          
          <Cards
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            
          />
        ))}
      </div>

      <h2>CSS</h2>
      <div className={styles.CSS}>
      
        
        {coursesCss.map((item, index) => (
          <Cards
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>

      <h2>JavaScript</h2>
      <div className={styles.CSS}>
      
        
        {coursesJavaScript.map((item, index) => (
          <Cards
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>


    </div>
     
  )
}
    
  

export default CourseFrontEnd;
