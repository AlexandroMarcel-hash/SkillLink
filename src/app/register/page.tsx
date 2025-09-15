"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type User = {
  nama: string;
  email: string;
  password: string;
  role: "mahasiswa" | "umkm";
};

type Toast = {
  id: number;
  message: string;
  type: "error" | "success";
};

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"mahasiswa" | "umkm" | "">("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: "error" | "success" = "error") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) {
      addToast("Pilih role terlebih dahulu!");
      return;
    }

    const storedUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = storedUsers.find(u => u.email === email);
    if (existingUser) {
      addToast("Email sudah terdaftar, silakan login!");
      return;
    }

    const newUser: User = { nama, email, password, role };
    localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));

    addToast("Registrasi berhasil! Silakan login.", "success");
    setTimeout(() => router.push("/login"), 500);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">

      {/* Toast Container */}
      <div className="fixed top-5 right-5 space-y-2 z-50">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded-lg shadow-lg text-white animate-slide-in ${
              t.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-2">
          Daftar Akun Baru
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Buat akun untuk bergabung dengan SkillLink
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={e => setNama(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="contoh@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Daftar sebagai:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("mahasiswa")}
                className={`px-4 py-2 rounded-lg border font-medium transition flex justify-center focus:outline-none ${
                  role === "mahasiswa" ? "bg-blue-800 text-white border-blue-800" : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                Mahasiswa
              </button>
              <button
                type="button"
                onClick={() => setRole("umkm")}
                className={`px-4 py-2 rounded-lg border font-medium transition flex justify-center focus:outline-none ${
                  role === "umkm" ? "bg-blue-800 text-white border-blue-800" : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                UMKM
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-900 transition font-semibold focus:outline-none"
          >
            Daftar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-800 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>

      <style jsx>{`
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
