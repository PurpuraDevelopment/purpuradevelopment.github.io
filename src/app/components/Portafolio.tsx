import Image from 'next/image';
import Link from 'next/link'; // Importa el componente Link

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-[#F8F9FA]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-4">Nuestro Portafolio</h2>
        <p className="text-lg text-[#333] mb-8">Proyectos destacados que demuestran nuestra innovación y compromiso.</p>
        {/* Slogan */}
        <p className="text-lg text-[#6A0DAD] italic">La innovación es nuestro motor y la calidad nuestra misión</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto 1: SociosConectados */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-30 blur-md z-10"></div>
          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="/images/sociosconectados.jpeg" // Ruta de la imagen del proyecto
            alt="SociosConectados"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <h3 className="text-white text-2xl font-semibold">SociosConectados</h3>
          </div>
          {/* Dueño del proyecto */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-30">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/luis.jpg" // Imagen del dueño
                alt="Luis Estrella"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <p className="text-white ml-2">Luis Estrella</p> {/* Aquí agregamos ml-2 para el margen */}
          </div>
          {/* Enlace para abrir en nueva ventana */}
          <Link href="https://www.sociosconectados.com" target="_blank" className="absolute inset-0 z-30"></Link>
        </div>

        {/* Proyecto 2: VariedadesNY */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-30 blur-md z-10"></div>
          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="/images/variedades.jpeg" // Ruta de la imagen del proyecto
            alt="VariedadesNY"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <h3 className="text-white text-2xl font-semibold">VariedadesNY</h3>
          </div>
          {/* Dueño del proyecto */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-30">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/yeni.jpeg" // Imagen del dueño
                alt="Yeni Alvarez"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <p className="text-white ml-2">Yeni Alvarez</p> {/* Aquí agregamos ml-2 para el margen */}
          </div>
          {/* Enlace para abrir en nueva ventana */}
          <Link href="https://www.variedadesny.com" target="_blank" className="absolute inset-0 z-30"></Link>
        </div>

        {/* Proyecto 3: CasaLuz */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
          <div className="absolute inset-0 bg-black bg-opacity-30 blur-md z-10"></div>
          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="/images/casaluz.jpeg" // Ruta de la imagen del proyecto
            alt="CasaLuz"
            width={600}
            height={400}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <h3 className="text-white text-2xl font-semibold">CasaLuz</h3>
          </div>
          {/* Dueño del proyecto */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 z-30">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/victor.jpg" // Imagen del dueño
                alt="Victor Cadete"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <p className="text-white ml-2">Victor Cadete</p> {/* Aquí agregamos ml-2 para el margen */}
          </div>
          {/* Enlace para abrir en nueva ventana */}
          <Link href="https://www.casaluz.online" target="_blank" className="absolute inset-0 z-30"></Link>
        </div>
      </div>
    </section>
  );
}
