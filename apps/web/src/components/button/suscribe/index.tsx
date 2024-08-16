import { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  onClick: ()=> void;
}

export function Button({onClick}: ButtonProps) {
  const [subscribed, setSubscribed] = useState(false);

  const handleClick= () => {
    setSubscribed (true);
    onClick();
    handleNavigate(''); //Despues Actualizar 
  }
  const navigate = useNavigate();

  const handleNavigate= (path: string) => {
    navigate(path);
  };

  return <div className={styles.root} onClick={handleClick }>
    <button className={subscribed ? styles.subscribed : styles['not-subscribed']}>{subscribed? 'Subscribed' : 'Subscribe'}</button>
  </div>;
}

export default Button;
