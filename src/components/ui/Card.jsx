import clasess from './Card.module.css';

const Card = ({ children }) => {
  return <div className={clasess.card}>{children}</div>;
};

export default Card;
