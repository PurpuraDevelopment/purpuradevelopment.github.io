// components/SurpriseMessage.js

import Image from 'next/image';
import styles from '../styles/SurpriseMessage.module.css';
import config from '../config.json';

export default function SurpriseMessage({ message }) {
  return (
    <div className={styles.surprise}>
      <h1>{message.title}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={config.imageUrl}
          alt="Imagen de cumpleaños"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <p>{message.body}</p>
    </div>
  );
}
