import AdminIndex from "./index";

import { redirect } from "next/navigation";

export default function AdminPage() {
  const isAuthenticated = true; // Cambia esto con tu lógica de autenticación.

  if (!isAuthenticated) {
    redirect("/login");
  }

  return <AdminIndex />;
}
