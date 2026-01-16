"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/logout", { method: "POST" });

    // UI update
    router.push("/login");
    router.refresh();
    toast.success("Logout Successful!");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-5 py-2 bg-gray-900 rounded-md text-white font-medium"
    >
      Logout
    </button>
  );
}
