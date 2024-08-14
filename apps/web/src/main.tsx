import { StrictMode, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import NotAuthenticatedPage from './pages/not-authenticated/layout';
import AuthenticatedPage from './pages/authenticated/layout';

export function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setAuthenticated(true);
  };

  if (!authenticated) {
    return <NotAuthenticatedPage onAuthenticated={handleAuthenticated} />;
  }

  return <AuthenticatedPage />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
