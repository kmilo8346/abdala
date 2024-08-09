import styles from './index.module.scss';

interface CardProps {
  name: string;
  imgUrl: string;
  onClick: () => void;
}

export function Cards({ name, imgUrl, onClick }: CardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imgUrl} alt='Imagen' />
      <h3 className={styles.cardName}>{name}</h3>
    </div>
  );
}

export default Cards;
