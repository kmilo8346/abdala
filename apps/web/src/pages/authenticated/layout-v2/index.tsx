import { useState } from 'react';
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import DropDownButton from '../../../components/button/user-button';
import { CoursesPage } from '../courses';
import { CreationsPage } from '../creations';
import { MyCoursesPage } from '../my-courses';
import Logo from '../../../assets/logo/Logo.png';
import CourseDetailPage from '../course-detail';
import { authenticator } from '../../../lib/Authenticator';

const { Content, Header } = Layout;

const items = [
  { key: '1', label: <Link to="/courses">Courses</Link> },
  { key: '2', label: <Link to="/my-courses">Subscriptions</Link> },
  { key: '3', label: <Link to="/creations">Creations</Link> },
];

export function LayoutPage() {
  

  const handleLogogedOut = () => {
    authenticator.signOut();
    window.location.href = '/';
  };

  return (
    <Router>
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 150px',
          }}
        >
          <div
            className="logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              width: '40%',
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '50px', borderRadius: '100%' }}
            />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{
                flex: 1,
                minWidth: 0,
                marginLeft: '20px',
              }}
              items={items}
            />
          </div>
          <DropDownButton handleLoguedOut={handleLogogedOut} />
        </Header>
        <br />
        <br />
        <Content style={{ padding: '0 150px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/courses" />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/creations" element={<CreationsPage />} />
            <Route path="/my-courses" element={<MyCoursesPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default LayoutPage;
