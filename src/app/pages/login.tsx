// /pages/login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "admin123") {
      document.cookie = "token=authenticated; path=/";
      router.push("/admin");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 border rounded-md mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full bg-purple-700 text-white py-2 rounded-md">
          Entrar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
