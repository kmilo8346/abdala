import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { authenticator } from './lib';
import BootPage from './pages/not-authenticated/boot';
import AuthenticatedPage from './pages/authenticated/layout';
import NotAuthenticatedPage from './pages/not-authenticated/layout';

export function App() {
  const [booted, setBooted] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleBooted = () => {
    setAuthenticated(authenticator.isAuthenticated());
    setBooted(true);
  };

  const handleAuthenticated = () => {
    setAuthenticated(true);
  };

  if (!booted) {
    return <BootPage onBooted={handleBooted} />;
  }

  if (!authenticated) {
    return <NotAuthenticatedPage onAuthenticated={handleAuthenticated} />;
  }

  return <AuthenticatedPage />;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
