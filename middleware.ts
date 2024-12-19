// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Ajusta el nombre de la cookie según tu sistema de autenticación
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirige al login si no hay token
  }

  return NextResponse.next();
}

// Configuración opcional para definir qué rutas usarán el middleware
export const config = {
  matcher: ["/admin/:path*"], // Aplica el middleware a todas las rutas dentro de /admin
};
