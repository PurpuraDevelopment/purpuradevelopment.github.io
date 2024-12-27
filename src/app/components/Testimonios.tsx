"use client";

import React, { useState, useEffect } from 'react';

const testimonios = [
  {
    id: 1,
    texto: "El diseño y funcionalidad de nuestra web con Purpura Development ha sido increíble. Gracias a su trabajo, las ventas de CasaLuz han aumentado significativamente.",
    nombre: "Victor Cadete",
    imagen: "/images/victor.jpg",
    cargo: "Fundador de CasaLuz",
  },
  {
    id: 2,
    texto: "El equipo de Purpura Development nos ayudó a mejorar la experiencia de nuestros usuarios con una aplicación más rápida y eficiente. ¡Estamos muy contentos con los resultados!",
    nombre: "Yeni Alvarez",
    imagen: "/images/yeni.jpeg",
    cargo: "Fundadora de VariedadesNY",
  },
  {
    id: 3,
    texto: "Trabajar con Purpura Development nos permitió optimizar nuestras operaciones internas y mejorar la comunicación dentro de nuestro equipo. Estamos muy agradecidos por su apoyo y dedicación.",
    nombre: "Luis Estrella",
    imagen: "/images/luis.jpg",
    cargo: "Fundador de EstrellaServices",
  },
  {
    id: 4,
    texto: "Excelente trabajo, quien te recomendó quedo corto al decir que eres bueno en lo que haces. Realmente quede impresionada, felicitaciones estoy encantada con mi diseño. Bendiciones!!",
    nombre: "Blanca Iris",
    imagen: "/images/blancairis.jpg",
    cargo: "Propietaria de D iris Interiores y mas",
  },
];

const TestimoniosCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex === testimonios.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="text-center py-20 px-4 bg-[#eeeeee]">
        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-4">Testimonios</h2>
        <p className="text-lg text-[#333]">Lo que dicen nuestros clientes sobre nosotros.</p>
      </div>
      <div
        className="carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {testimonios.concat(testimonios).map((testimonio, index) => (
            <div key={index} className="carousel-slide">
              <div className="testimonial-card group relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
                <p className="text-lg text-[#333] italic">{testimonio.texto}</p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonio.imagen}
                      alt={testimonio.nombre}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4 text-[#6A0DAD] font-semibold">{testimonio.nombre}</div>
                </div>
                <p className="mt-2 text-[#6A0DAD]">{testimonio.cargo}</p>
              </div>
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
            background-color: #eeeeee; /* Light grey background */
            padding: 90px 0; /* Increase height */
            padding-left: 25px; /* Remove left padding */
            padding-top: 15px;
          }
          .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }
          .carousel-slide {
            flex: 0 0 33.33%;
            text-align: center;
          }
          .testimonial-card {
            width: 95%;
            max-width: 5000px;
            height: 250px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TestimoniosCarousel;
