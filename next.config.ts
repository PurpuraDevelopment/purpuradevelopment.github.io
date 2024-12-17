import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Define que se utilizará la exportación estática
  distDir: 'out',   // Especifica que los archivos generados se guardarán en el directorio 'out'
};

export default nextConfig;
