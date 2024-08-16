import { useState } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  onClick: ()=> void;
}

export function ButtonSuscribed({onClick}: ButtonProps) {
  const [suscribe, setSuscribe] = useState(true);

  const handleClick= () => {
    setSuscribe (false);
    onClick();
    handleNavigate(''); //Despues Actualizar 
  }
  const navigate = useNavigate();

  const handleNavigate= (path: string) => {
    navigate(path);
  };

  return <div className={styles.root} onClick={handleClick }>
    <button className={suscribe ? styles.subscribed : styles['not-subscribed']}>{suscribe? 'Subscribed' : 'Subscribe'}</button>
  </div>;
}

export default ButtonSuscribed;
