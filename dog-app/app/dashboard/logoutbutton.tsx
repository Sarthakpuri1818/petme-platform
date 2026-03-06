"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout");   // calls your logout route

    router.replace("/login");
    router.refresh();
  };

  return (
    <button className="add-btn" onClick={logout}>
      Logout
    </button>
  );
}