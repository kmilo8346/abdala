import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { LoginPage, LayoutPage, CreateUserPage } from './pages';

export function App() {
  const [logged, setLogged] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  const handleLoginIn = () => {
    setLogged(true);
  };

  const handleCreateUser = () => {
    setUserCreated(true);
  };

  if (!logged) {
    return <LoginPage onLoginIn={handleLoginIn} />;
  }


  if (!userCreated) {
    return <CreateUserPage userCreated={handleCreateUser} />;
  }

  
  return <LayoutPage />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
