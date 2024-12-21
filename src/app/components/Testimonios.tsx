import React from 'react';

const Testimonios = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-[#E8E8E8]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-4">Testimonios</h2>
        <p className="text-lg text-[#333] mb-8">Lo que dicen nuestros clientes sobre nosotros.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonio 1 */}
        <div className="testimonial-card group relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <p className="text-lg text-[#333] italic">El diseño y funcionalidad de nuestra web con Purpura Development ha sido increíble. Gracias a su trabajo, las ventas de CasaLuz han aumentado significativamente, y la experiencia de usuario es mucho más fluida.</p>
          <div className="mt-4 flex items-center">
            {/* Imagen de quien dijo el testimonio */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/images/victor.jpg" // Imagen del cliente
                alt="Victor Cadete"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            {/* Nombre de la persona */}
            <div className="ml-4 text-[#6A0DAD] font-semibold">Victor Cadete</div>
            {/* Estrellas de calificación */}
            <div className="flex space-x-1 text-yellow-400 ml-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                  <path d="M8 12.514l3.536 2.091-1-4.518 3.636-3.182-4.636-.404-1.636-4.435-1.636 4.435-4.636.404 3.636 3.182-1 4.518L8 12.514z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="mt-2 text-[#6A0DAD]">Fundador de CasaLuz</p>
        </div>

        {/* Testimonio 2 */}
        <div className="testimonial-card group relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <p className="text-lg text-[#333] italic">El equipo de Purpura Development nos ayudó a mejorar la experiencia de nuestros usuarios con una aplicación más rápida y eficiente. ¡Estamos muy contentos con los resultados!</p>
          <div className="mt-4 flex items-center">
            {/* Imagen de quien dijo el testimonio */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/images/yeni.jpeg" // Imagen del cliente
                alt="Yeni Alvarez"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            {/* Nombre de la persona */}
            <div className="ml-4 text-[#6A0DAD] font-semibold">Yeni Alvarez</div>
            {/* Estrellas de calificación */}
            <div className="flex space-x-1 text-yellow-400 ml-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                  <path d="M8 12.514l3.536 2.091-1-4.518 3.636-3.182-4.636-.404-1.636-4.435-1.636 4.435-4.636.404 3.636 3.182-1 4.518L8 12.514z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="mt-2 text-[#6A0DAD]">Fundadora de VariedadesNY</p>
        </div>

        {/* Testimonio 3 */}
        <div className="testimonial-card group relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <p className="text-lg text-[#333] italic">Trabajar con Purpura Development nos permitió optimizar nuestras operaciones internas y mejorar la comunicación dentro de nuestro equipo. Estamos muy agradecidos por su apoyo y dedicación.</p>
          <div className="mt-4 flex items-center">
            {/* Imagen de quien dijo el testimonio */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/images/luis.jpg" // Imagen del cliente
                alt="Luis Estrella"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            {/* Nombre de la persona */}
            <div className="ml-4 text-[#6A0DAD] font-semibold">Luis Estrella</div>
            {/* Estrellas de calificación */}
            <div className="flex space-x-1 text-yellow-400 ml-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                  <path d="M8 12.514l3.536 2.091-1-4.518 3.636-3.182-4.636-.404-1.636-4.435-1.636 4.435-4.636.404 3.636 3.182-1 4.518L8 12.514z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="mt-2 text-[#6A0DAD]">Fundador de EstrellaServices</p>
        </div>
        <div className="testimonial-card group relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-105">
          <p className="text-lg text-[#333] italic">Excelente trabajo, quien te recomendó quedo corto al decir que eres bueno en lo que haces. Realmente quede impresionada, felicitaciones estoy encantada con mi diseño. Bendiciones!!</p>
          <div className="mt-4 flex items-center">
            {/* Imagen de quien dijo el testimonio */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/images/blancairis.jpg" // Imagen del cliente
                alt="Blanca Iris"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            {/* Nombre de la persona */}
            <div className="ml-4 text-[#6A0DAD] font-semibold">Blanca Iris</div>
            {/* Estrellas de calificación */}
            <div className="flex space-x-1 text-yellow-400 ml-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                  <path d="M8 12.514l3.536 2.091-1-4.518 3.636-3.182-4.636-.404-1.636-4.435-1.636 4.435-4.636.404 3.636 3.182-1 4.518L8 12.514z"/>
                </svg>
              ))}
            </div>
          </div>
          <p className="mt-2 text-[#6A0DAD]">Propietaria de D iris Interiores y mas</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
