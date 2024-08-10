import styles from './index.module.scss';

interface ButtonProps {
  onClick: ()=> void;
}

export function Button({onClick}: ButtonProps) {
  return <div className={styles.root} onClick={onClick}>
    <button>Subscribe</button>
  </div>;
}

export default Button;
