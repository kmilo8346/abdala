import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { LoginPage, LayoutPage } from './pages';

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
    <App />
  </StrictMode>
);
