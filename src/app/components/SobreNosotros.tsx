import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Asegúrate de importar Link de Next.js

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="py-20 px-4 bg-[#F1F1F1]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-[#6A0DAD] mb-4">Sobre Nosotros</h2>
        <p className="text-lg text-[#555]">Conoce más sobre quiénes somos y lo que nos apasiona.</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/images/team.png" // Imagen del equipo
            alt="Nuestro equipo"
            width={500}
            height={400}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-1/2 pl-8">
          <h3 className="text-3xl font-semibold text-[#6A0DAD] mb-4">Nuestra Misión</h3>
          <p className="text-lg text-[#333] mb-4">
            Nos dedicamos a ofrecer soluciones tecnológicas innovadoras que ayuden a las empresas a crecer, optimizar sus procesos y mejorar su presencia en línea.
          </p>
          <h3 className="text-3xl font-semibold text-[#6A0DAD] mb-4">Nuestros Valores</h3>
          <ul className="list-disc pl-6 text-lg text-[#333]">
            <li>Innovación constante</li>
            <li>Compromiso con la calidad</li>
            <li>Trabajo en equipo</li>
            <li>Transparencia y confianza</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-[#6A0DAD] mb-4">Conoce a nuestro equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="card p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <Link href="https://devripley.github.io/" target="_blank"> {/* Solo se usa Link sin un <a> adicional */}
              <img
                src="/images/devripley.jpg" // Ruta de la foto de DevRipley
                alt="DevRipley"
                className="w-32 h-32 mx-auto rounded-full mb-4 cursor-pointer" // Añadido cursor-pointer para indicar que es clickeable
              />
            </Link>
            <h3 className="text-xl font-semibold text-[#6A0DAD]">DevRipley</h3>
            <p className="text-lg text-gray-600">CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
