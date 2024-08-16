import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useState } from 'react';

import styles from './index.module.scss';
import { CoursesPage } from '../courses';
import { CreationsPage } from '../creations';
import { MyCoursesPage } from '../my-courses';

import Logo from '../../../assets/logo/Logo.png';
import User from '../../../assets/iconos/User.png';
import LoginPage from '../../not-authenticated/login';
import CourseDetailPage from '../course-detail';

export function LayoutPage() {
  const handleLogoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event);
  };

  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const handleUserHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserMenuVisible(true);
  };

  const handleUserLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserMenuVisible(false);
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
                <div className={styles.userMenu}>
                  <Link to="/login" className={styles.userMenuItem}>
                    Close Section
                  </Link>
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
