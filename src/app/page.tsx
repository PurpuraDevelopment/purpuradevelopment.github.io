import Hero from "@/app/components/Hero";
import Servicios from "@/app/components/Servicios";
import Portafolio from "@/app/components/Portafolio";
import Testimonios from "@/app/components/Testimonios";
import Nosotros from "@/app/components/SobreNosotros";
import Contacto from "@/app/components/Contacto";
import Footer from "@/app/components/Footer";
import Tecnologias from "@/app/components/Tecnologias";

export default function Home() {
  
  return (
    <>
      <Hero />
      <Servicios />
      <Portafolio />
      <Testimonios />
      <Tecnologias />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  );
}
