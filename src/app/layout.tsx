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
        {/* Script para ElevenLabs Convai */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var convaiScript = document.createElement('script');
              convaiScript.src = "https://elevenlabs.io/convai-widget/index.js";
              convaiScript.async = true;
              document.body.appendChild(convaiScript);

              var convaiWidget = document.createElement('elevenlabs-convai');
              convaiWidget.setAttribute('agent-id', 'f1xPHVNUtPgjVjJBqYyj');
              document.body.appendChild(convaiWidget);
            `,
          }}
        ></script>

        {/* Widget de Tawk.to */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/6763527449e2fd8dfefa0ad9/1ifdvk5kg";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        ></script>
      </body>
    </html>
  );
}
