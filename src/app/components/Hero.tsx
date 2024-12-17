"use client";

export default function Hero() {
  return (
    <section 
      className="relative flex items-center justify-center h-screen text-white text-center px-4 transition-all duration-300"
      style={{
        background: 'var(--hero-background)', // Fondo dinámico según el modo
      }}
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Púrpura Development
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Innovación y seguridad en un solo lugar
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#contacto"
            className="bg-white text-[#6A0DAD] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#cfabff] transition-all duration-300"
          >
            Contáctanos
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white text-[#b9b9b9] hover:text-[#6A0DAD] transition-all duration-300"
          >
            Explorar servicios
          </a>
        </div>
      </div>
    </section>
  );
}
