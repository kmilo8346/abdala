import { Layout } from 'antd';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import LoginPage from '../../not-authenticated/login-v2';
import SignupPage from '../../not-authenticated/signup-v2';

const { Content } = Layout;

interface LayoutPageProps {
  onAuthenticated: () => void;
}

export function LayoutPage(props: LayoutPageProps) {
  return (
    <Layout>
      <Content>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<LoginPage onLoginIn={props.onAuthenticated} />}
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Content>
    </Layout>
  );
}

export default LayoutPage;
