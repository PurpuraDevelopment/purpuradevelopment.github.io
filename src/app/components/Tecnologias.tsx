"use client";

import React, { useState, useEffect } from 'react';

interface Tecnologia {
  id: number;
  logo: string;
}

const tecnologias: Tecnologia[] = [
  { id: 1,  logo: '/images/icons/nextjs.png' },
  { id: 2,  logo: '/images/icons/astro.png' },
  { id: 3,  logo: '/images/icons/react.png' },
  { id: 4,  logo: '/images/icons/git.png' },
  { id: 5,  logo: '/images/icons/vercel.png' },
  { id: 6,  logo: '/images/icons/mysql.png' },
  { id: 7,  logo: '/images/icons/wordpress.png' },
  { id: 8,  logo: '/images/icons/chartjs.png' },
  { id: 9,  logo: '/images/icons/tailwindcss.png' },
  { id: 10, logo: '/images/icons/markdown.png' },
  { id: 11, logo: '/images/icons/spring.png' },
  { id: 12, logo: '/images/icons/typescript.png' },
  { id: 13, logo: '/images/icons/java.png' },
  { id: 14, logo: '/images/icons/python.png' },
  { id: 15, logo: '/images/icons/javascript.png' },
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
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f9f9f9; /* Light grey background */
            padding: 90px 0; /* Increase height */
            padding-left: 200px; /* Remove left padding */
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