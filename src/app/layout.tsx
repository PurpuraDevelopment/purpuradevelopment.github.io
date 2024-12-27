import "./globals.css";
import "next/script"

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
      <head>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NXQMV8B');`}
        </script>
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HRLLZWZY81"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HRLLZWZY81');`}
        </script>
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </head>
      <body className={modoLectura ? "modo-lectura" : ""}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NXQMV8B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
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
        <script>
          {`
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                  });
                }
              });
            });
          `}
        </script>
      </body>
    </html>
  );
}
