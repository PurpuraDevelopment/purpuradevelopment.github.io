import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Deshabilita la optimización de imágenes
  },
  output: 'export', // Define que se utilizará la exportación estática
  distDir: 'out',   // Especifica que los archivos generados se guardarán en el directorio 'out'
};

export default nextConfig;
