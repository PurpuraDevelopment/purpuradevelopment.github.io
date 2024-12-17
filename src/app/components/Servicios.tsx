import { FaCode, FaShieldAlt, FaDesktop, FaChalkboardTeacher } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#F8F9FA]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#6A0DAD] mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-[#333]">Soluciones digitales innovadoras para tu negocio.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Servicio 1: Desarrollo de software a medida */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
          <FaCode className="text-4xl text-[#6A0DAD] mb-4" />
          <h3 className="text-2xl font-semibold text-[#6A0DAD] mb-2">Desarrollo de Software</h3>
          <p className="text-gray-600">Creamos soluciones a medida para tu negocio, optimizando tus procesos y mejorando la eficiencia.</p>
        </div>
        {/* Servicio 2: Ciberseguridad */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
          <FaShieldAlt className="text-4xl text-[#6A0DAD] mb-4" />
          <h3 className="text-2xl font-semibold text-[#6A0DAD] mb-2">Ciberseguridad</h3>
          <p className="text-gray-600">Con PúrpuraGuard, protegemos tu infraestructura digital de las amenazas más avanzadas.</p>
        </div>
        {/* Servicio 3: Aplicaciones web modernas */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
          <FaDesktop className="text-4xl text-[#6A0DAD] mb-4" />
          <h3 className="text-2xl font-semibold text-[#6A0DAD] mb-2">Aplicaciones Web</h3>
          <p className="text-gray-600">Desarrollamos aplicaciones web modernas, eficientes y escalables para tu empresa.</p>
        </div>
        {/* Servicio 4: Consultoría tecnológica */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
          <FaChalkboardTeacher className="text-4xl text-[#6A0DAD] mb-4" />
          <h3 className="text-2xl font-semibold text-[#6A0DAD] mb-2">Consultoría Tecnológica</h3>
          <p className="text-gray-600">Te ayudamos a optimizar tu infraestructura tecnológica con estrategias y consejos expertos.</p>
        </div>
      </div>
    </section>
  );
}
