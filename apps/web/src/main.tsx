import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { LoginPage, RootPage } from './pages';
import { BrowserRouter, } from 'react-router-dom';
import Router from './routes/routes';


export function App() {
  const [logged, setLogged] = useState(false);

  const handleLoginIn = () => {
    setLogged(true);
  };

  if (!logged) {
    return <LoginPage onLoginIn={handleLoginIn} />;
  }

  return <RootPage />;
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
