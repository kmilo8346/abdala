import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoginPage from '../../not-authenticated/login';
import SignupPage from '../../not-authenticated/signup';
import styles from './index.module.scss';

interface LayoutPageProps {
  onAuthenticated: () => void;
}

export function LayoutPage(props: LayoutPageProps) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage onLoginIn={props.onAuthenticated} />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<div className={styles.root}>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default LayoutPage;
