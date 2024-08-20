import { useState } from 'react';
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import { CoursesPage } from '../courses';
import { CreationsPage } from '../creations';
import { MyCoursesPage } from '../my-courses';
import styles from './index.module.scss';

import User from '../../../assets/iconos/User.png';
import Logo from '../../../assets/logo/Logo.png';
import CourseDetailPage from '../course-detail';
import { authenticator } from '../../../lib/Authenticator';

export function LayoutPage() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
  };

  const handleUserHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserMenuVisible(true);
  };

  const handleUserLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserMenuVisible(false);
  };

  const handleLogogedOut = () => {
    // 1- Cerrar sesión
    authenticator.signOut();
    // 2- Abrir el router de Not Authenticated
    // llamando la url '/'
    window.location.href = '/';
  };

  return (
    <Router>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.logo} onClick={handleLogoClick}>
            <img className={styles.img} alt="Logo" src={Logo} />
          </div>

          <div className={styles.menu}>
            <Link to="/courses">Courses</Link>
            <Link to="/my-courses">My Courses</Link>
            <Link to="/creations">Creations</Link>
            <div
              className={styles.user}
              onMouseEnter={handleUserHover}
              onMouseLeave={handleUserLeave}
            >
              <img src={User} className={styles.img} alt="User-Img"></img>
              {userMenuVisible && (
                <div className={styles.userMenu} onClick={handleLogogedOut}>
                  <div className={styles.userMenuItem}>Close Section</div>
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
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/creations" element={<CreationsPage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default LayoutPage;
