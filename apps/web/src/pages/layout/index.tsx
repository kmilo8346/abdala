import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import styles from './index.module.scss';
import { CoursesPage } from '../courses';
import { CreationsPage } from '../creations';
import { MyCoursesPage } from '../my-courses';

// TODO:
// 1- Agregar un logo al header
// 2- Aregar el ícono de usuario al header
// 3- Agregar un menú desplegable al ícono de usuario [Mis cursos, Mis creaciones, Cerrar sesión]

// TODO
// ** El card es un componente reutilizable **
// 1- Crear pagina de cursos
// 2- Crear pagina de creaciones
// 3- Crear pagina de mis cursos

export function LayoutPage() {
  return (
    <Router>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.logo} />
        </header>
        <section className={styles.body}>
          <ul>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/creations">Creations</a>
            </li>
            <li>
              <a href="/my-courses">My Courses</a>
            </li>
          </ul>
          <br />
          <br />

          <Routes>
            <Route path="/" element={<Navigate to="/courses" />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/creations" element={<CreationsPage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default LayoutPage;
