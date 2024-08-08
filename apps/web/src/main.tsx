import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { LoginPage, RootPage } from './pages';
import { BrowserRouter, } from 'react-router-dom';
import Router from './routes/routes';

=======
import { LoginPage, LayoutPage } from './pages';
>>>>>>> c5e08bef1ec2f467aeaa58bba0c051be5998ff48

export function App() {
  const [logged, setLogged] = useState(true);

  const handleLoginIn = () => {
    setLogged(true);
  };

  if (!logged) {
    return <LoginPage onLoginIn={handleLoginIn} />;
  }

  return <LayoutPage />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
