import styles from '../styles/Countdown.module.css';

export default function Countdown({ timeRemaining }) {
  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  // Si el tiempo restante es menor o igual a 0, lo fijamos a 0
  const adjustedTimeRemaining = timeRemaining <= 0 ? 0 : timeRemaining;

  const hours = Math.floor(adjustedTimeRemaining / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor((adjustedTimeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((adjustedTimeRemaining % (1000 * 60)) / 1000);

  return (
    <div className={styles.countdown}>
      <h2>Tiempo restante para tu sorpresa:</h2>
      <div className={styles.timer}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
    </div>
  );
}
