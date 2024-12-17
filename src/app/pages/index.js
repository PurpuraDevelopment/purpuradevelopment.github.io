import Head from "next/head";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Púrpura Development</title>
        <meta name="description" content="Innovación y seguridad en un solo lugar" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Aquí puedes añadir más secciones en el futuro */}
    </div>
  );
}
