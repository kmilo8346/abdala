import { useEffect } from 'react';
import { authenticator } from '../../../lib/Authenticator';

interface BootPageProps {
  onBooted: () => void;
}

export function BootPage(props: BootPageProps) {
  const handleBoot = async () => {
    await authenticator.boot();
    // Si necesitas bootear mas cosas lo hago acá

    // Comunico al padre que ya bootee
    props.onBooted();
  };

  useEffect(() => {
    handleBoot();
  }, []);

  return null;
}

export default BootPage;
