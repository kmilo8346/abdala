import styles from './index.module.scss';
import { Cards } from '../../components/cards'
import BE from "../../assets/cursos/back-end/B-E.png"
import BE1 from "../../assets/cursos/back-end/B-E1.png"
import BE2 from "../../assets/cursos/back-end/B-E2.png"
import BE3 from "../../assets/cursos/back-end/B-E3.png"
import BE4 from "../../assets/cursos/back-end/B-E4.png"



interface CoursesList {
  id: string;
  name: string;
  imgUrl: string;
  
}

const coursesBackEnd: CoursesList[] = [
  {id: "Introduccion ", name: "Introduccion a ", imgUrl: BE },
  {id: "Entendiendo ", name: "Entendiendo  HTML", imgUrl: BE1 },
  {id: "Creando con ", name: "Creando con HTML", imgUrl: BE2 },
  {id: "Creando con  parte 2", name: "Creando con HTML parte 2", imgUrl: BE3 },
]



export function CourseBackEnd() {
  return (
    <div className={styles.root}>
      <h1>Back-End</h1>
      
      
      <h2>NODE</h2>
      <div className={styles.NODE}>
        
        {coursesBackEnd.map((item, index) => (
          
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
    
  

export default CourseBackEnd;
