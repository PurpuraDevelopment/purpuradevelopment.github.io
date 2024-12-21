"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginIndex() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Contraseña predeterminada
    const defaultPassword = "admin123";

    if (password === defaultPassword) {
      // Redirige al panel de administración
      router.push("/admin");
    } else {
      // Muestra un mensaje de error
      setError("Contraseña incorrecta. Intenta de nuevo.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Iniciar Sesión</h1>
      <p>Ingresa tus credenciales para acceder.</p>
      <form className="mt-4" onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 text-red-500 text-sm">{error}</div>
        )}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Contraseña:
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
