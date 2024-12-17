import "./globals.css";

export const metadata = {
  title: "Purpura Development",
  description: "Innovación y seguridad en un solo lugar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const modoLectura = true; // Estado de modo lectura, cámbialo a false si quieres activar interacciones.

  return (
    <html lang="es">
      <body className={modoLectura ? "modo-lectura" : ""}>
        {children}
      </body>
    </html>
  );
}
