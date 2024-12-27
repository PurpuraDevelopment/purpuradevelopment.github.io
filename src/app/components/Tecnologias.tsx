"use client";

import React, { useState, useEffect } from 'react';

interface Tecnologia {
  id: number;
  logo: string;
}

const tecnologias: Tecnologia[] = [
  { id: 1,  logo: '/images/nextjs.png' },
  { id: 2,  logo: '/images/astro.png' },
  { id: 3,  logo: '/images/react.png' },
  { id: 4,  logo: '/images/git.png' },
  { id: 5,  logo: '/images/vercel.png' },
  { id: 6,  logo: '/images/mysql.png' },
  { id: 7,  logo: '/images/wordpress.png' },
  { id: 8,  logo: '/images/chartjs.png' },
  { id: 9,  logo: '/images/tailwindcss.png' },
  { id: 10, logo: '/images/markdown.png' },
  { id: 11, logo: '/images/spring.png' },
  { id: 12, logo: '/images/typescript.png' },
  { id: 13, logo: '/images/java.png' },
  { id: 14, logo: '/images/python.png' },
  { id: 15, logo: '/images/javascript.png' },
];

const TecnologiasCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tecnologias.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex === tecnologias.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="text-center py-20 px-4 bg-[#F8F9FA]">
        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-4">Tecnologias</h2>
        <p className="text-lg text-[#333]">Contamos con las tecnologias mas modernas para tu empresa.</p>
      </div>
      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
          {tecnologias.concat(tecnologias).map((tecnologia, index) => (
            <div key={index} className="carousel-slide">
              <img src={tecnologia.logo} style={{ width: '100px', height: '100px', transition: 'transform 0.3s' }} className="carousel-image" />
            </div>
          ))}
        </div>
        <style jsx>{`
          .carousel {
            overflow: hidden;
            width: 105%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9f9f9; /* Light grey background */
            padding: 90px 0; /* Increase height */
            padding-top: 15px;
            padding-left: 150px; /* Remove left padding */
            padding-right: 0px;
            
        }
          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }
          .carousel-slide {
            flex: 0 0 20%;
            text-align: center;
          }
          .carousel-slide:hover .carousel-image {
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </div>
  );
};

export default TecnologiasCarousel;