'use client';  // Esto marca el componente como cliente

import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Countdown from '../components/Countdown';
import SurpriseMessage from '../components/SupriseMessage';
import styles from '../styles/Home.module.css';
import config from '../config.json';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

const Birthday = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [audioPlayed, setAudioPlayed] = useState(false); // Estado para controlar si la música ha sido reproducida
  const [isMobile, setIsMobile] = useState(false); // Estado para verificar si es móvil

  useEffect(() => {
    // Verificar si es móvil cuando el componente se monta
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 600);
    }

    const calculateTimeRemaining = () => {
      const now = new Date();
      const [year, month, day] = config.targetDate.split('-').map(Number);
      const [hours, minutes, seconds] = config.targetTime.split(':').map(Number);
      const targetTime = new Date(year, month - 1, day, hours, minutes, seconds);

      const difference = targetTime.getTime() - now.getTime();

      if (difference <= 0) {
        setShowSurprise(true);  // Mostrar la carta cuando termine el tiempo
        setTimeRemaining(0);    // El tiempo restante es 0
      } else {
        setTimeRemaining(difference); // Solo actualiza si aún hay tiempo
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Reproducir la música al entrar al sitio
    if (!audioPlayed) {
      const audio = new Audio('/audio/music.mp3');
      audio.play();
      setAudioPlayed(true); // Actualiza el estado para indicar que la música ha sido reproducida
    }

    // Limpiar el intervalo cuando el tiempo llegue a 0
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Asegurarse de no reiniciar el conteo innecesariamente

  useEffect(() => {
    if (timeRemaining === 0) {
      openCard();  // Open the card when the countdown reaches 0
    }
  }, [timeRemaining]);

  useEffect(() => {
    if (showSurprise && !audioPlayed) {
      // Reproducir la música cuando la carta se abra
      const audio = new Audio('/audio/music.mp3');
      audio.play();
      setAudioPlayed(true); // Actualiza el estado para indicar que la música ha sido reproducida
    }
  }, [showSurprise, audioPlayed]);

  // Función para manejar el clic y reproducir la música
  const handleCardClick = () => {
    if (config.clickToOpen && !showSurprise) {
      setShowSurprise(true);  // Solo abrir la carta si clickToOpen es true y aún no está abierta
    }

    if (config.clickToOpen && !audioPlayed) {
      const audio = new Audio('/audio/music.mp3');
      audio.play();
      setAudioPlayed(true);  // Actualiza el estado para indicar que la música ya se ha reproducido
    }
  };

  // Función para abrir la carta cuando se alcance la hora objetivo
  const openCard = () => {
    setShowSurprise(true);
    if (!audioPlayed) {
      const audio = new Audio('/audio/music.mp3');
      audio.play();
      setAudioPlayed(true);  // Actualiza el estado para indicar que la música ya se ha reproducido
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cuenta regresiva de cumpleaños</title>
        <meta name="description" content="Una sorpresa especial te espera" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          className={`${styles.card} ${showSurprise ? styles.open : ''}`}
          onClick={handleCardClick}
          style={{
            width: isMobile ? `${config.cardWidthMobile}px` : `${config.cardWidthPC}px`,
            height: isMobile ? `${config.cardHeightMobile}px` : `${config.cardHeightPC}px`,
          }}
        >
          <div className={styles.cardFront}>
            {timeRemaining !== null && timeRemaining > 0 && <Countdown timeRemaining={timeRemaining} />}
          </div>
          <div className={styles.cardBack}>
            <SurpriseMessage message={config.message} />
          </div>
        </div>
      </main>

      {showSurprise && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </div>
  );
};

export default Birthday;
