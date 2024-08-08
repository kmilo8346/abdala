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

// TODO: Kiko
// 1- Agregar un logo al header
// 2- Aregar el ícono de usuario al header
// 3- Mejora el diseño del menu en el header, tiene que mostrar cuando se haga header

// TODO
// ** El card es un componente reutilizable **
// 1- Crear pagina de cursos
// 2- Crear pagina de creaciones
// 3- Crear pagina de mis cursos

export function LayoutPage() {
  const handleLogoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <Router>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.logo} onClick={handleLogoClick} />

          <div className={styles.menu}>
            <a href="/courses">Courses</a>
            <a href="/creations">Creations</a>
            <a href="/creations">Creations</a>
          </div>
        </header>
        <section className={styles.body}>
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
