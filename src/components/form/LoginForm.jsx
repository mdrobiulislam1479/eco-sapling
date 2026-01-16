"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@gmail.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      router.push("/plants");
      router.refresh();
      toast.success("Login Successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1 w-full text-black rounded-md border border-gray-700 px-3 py-2 text-sm focus:ring-2 focus:ring-green-700 focus:outline-0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="mt-1 w-full text-black rounded-md border border-gray-700 px-3 py-2 text-sm focus:ring-2 focus:ring-green-700 focus:outline-0"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-2 rounded-md text-sm font-medium transition cursor-pointer"
      >
        Sign In
      </button>
    </form>
  );
}
