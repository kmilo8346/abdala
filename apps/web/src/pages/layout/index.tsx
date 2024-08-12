import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useState,  } from 'react';

import styles from './index.module.scss';
import { CoursesPage } from '../courses';
import { CreationsPage } from '../creations';
import { MyCoursesPage } from '../my-courses';
import { CourseFrontEnd } from '../courseFrontEnd';
import { CourseBackEnd } from '../CourseBackEnd';

import Logo from "../../assets/logo/Logo.png"
import User from "../../assets/iconos/User.png"
import LoginPage from '../login';

// TODO:
// 1- Agregar un logo al header
// 2- Aregar el ícono de usuario al header
// 3- Mejora el diseño del menu en el header, tiene que mostrar cuando se haga header

// TODO:
// ** El card es un componente reutilizable **
// 1- Crear pagina de cursos
// 2- Crear pagina de creaciones
// 3- Crear pagina de mis cursos


export function LayoutPage() {
  const handleLogoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
  };

  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const handleUserHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserMenuVisible (true);
  }

  const handleUserLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserMenuVisible(false);
  }

  return (
    <Router>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.logo} onClick={handleLogoClick}>
            <img className={styles.img} alt='Logo' src={Logo}/>
          </div>

          <div className={styles.menu}>
            <a href="/courses">Courses</a>
            <a href="/my-courses">My Courses</a>
            <a href="/creations">Creations</a>
            <div className={styles.user} onMouseEnter={handleUserHover} onMouseLeave={handleUserLeave}>
              <img src={User} className={styles.img} alt='User-Img'></img>
              {userMenuVisible && (
              <div className={styles.userMenu}>
              <a href='/login' className={styles.userMenuItem}>Close Section</a>
            </div>
            )}
            </div>
          </div>
          
        </header>
        <section className={styles.body}>
          <br />
          <br />

          <Routes>
            <Route path="/" element={<Navigate to="/courses" />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courseFrontEnd" element={<CourseFrontEnd />} />
            <Route path="/courseBackEnd" element={<CourseBackEnd />} />
            <Route path="/creations" element={<CreationsPage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default LayoutPage;

//  interface UserProps {
//  onClick: () => void;
//  onHover: () => void;
//  }