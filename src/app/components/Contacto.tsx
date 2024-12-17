"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const webhookURL =
      "https://discord.com/api/webhooks/1318452851172966440/Ux29BlKbpBFWaP7JY48BiU3iHjjDbeIg31l74giLIgX6ppL7aaBt49ADi8aRQX3wrU9D";

    const payload = {
      content: `📩 **Nuevo Mensaje de Contacto**\n**Nombre:** ${formData.name}\n**Correo:** ${formData.email}\n**Mensaje:** ${formData.message}`,
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Mensaje enviado correctamente a Discord 🎉", {
          position: "top-center", // Centrado arriba
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" }); // Limpiar el formulario
      } else {
        toast.error("Error al enviar el mensaje a Discord.", {
          position: "top-center", // Centrado arriba
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error de conexión con el servidor.", {
        position: "top-center", // Centrado arriba
      });
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-[#FFF]">
      {/* Toast Container */}
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-[#6A0DAD] mb-4">Contacto</h2>
        <p className="text-lg text-[#555]">
          Estamos aquí para ayudarte. ¡Contáctanos!
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#6A0DAD] mb-6">
            Envíanos un mensaje
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg text-[#333]">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none text-[#333] focus:border-[#6A0DAD]"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-[#333]">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none text-[#333] focus:border-[#6A0DAD]"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-[#333]">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg focus:outline-none text-[#333] focus:border-[#6A0DAD]"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#6A0DAD] text-white rounded-lg hover:bg-[#520c8e] transition-all"
            >
              Enviar Mensaje
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contacto;
