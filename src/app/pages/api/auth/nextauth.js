import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        // Verifica el usuario y contraseña
        const user = {
          id: 1,
          name: "Admin",
          email: "admin@purpura.com",
        };

        if (
          credentials.username === "devripley" &&
          credentials.password === "Th3Purpura0wner#2025"
        ) {
          return user; // Autenticado
        }

        return null; // Error en las credenciales
      },
    }),
  ],
  pages: {
    signIn: "/admin/login", // Página personalizada de login
  },
  secret: process.env.NEXTAUTH_SECRET, // Genera una clave secreta si no tienes una
});
