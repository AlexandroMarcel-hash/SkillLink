"use client";

import {
  FiUser,
  FiClipboard,
  FiStar,
  FiTrendingUp,
  FiBriefcase,
  FiLogOut,
  FiLayers,
  FiSearch, // ✅ tambahin icon search
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  nama: string;
  email: string;
  role: "mahasiswa" | "umkm";
};

type SidebarProps = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

export default function Sidebar({ activeMenu, setActiveMenu }: SidebarProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (storedUser) setUser(storedUser);
  }, []);

  const menus = [
    { id: "overview", label: "Ringkasan", icon: <FiTrendingUp size={20} /> },
    { id: "ai-matching", label: "AI Matching", icon: <FiLayers size={20} /> },
    { id: "profile", label: "Profil", icon: <FiUser size={20} /> },
    { id: "projects", label: "Proyek", icon: <FiClipboard size={20} /> },
    { id: "portfolio", label: "Portofolio", icon: <FiBriefcase size={20} /> },
    { id: "feedback", label: "Feedback", icon: <FiStar size={20} /> },
    { id: "search-post", label: "Cari / Posting", icon: <FiSearch size={20} /> }, // ✅ baru ditambahkan
  ];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/"); // kembali ke landing page
  };

  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto z-40">

      {/* Logo SkillLink */}
      <h1 className="text-2xl font-bold text-blue-900 mb-4">SkillLink</h1>

      {/* Salam */}
      {user && (
        <div className="mb-6 px-2 py-2 rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-all">
          <p className="text-gray-500 text-sm">Halo,</p>
          <h2 className="text-lg font-semibold text-blue-900 truncate">
            {user.nama}
          </h2>
        </div>
      )}

      {/* Menu navigasi */}
      <nav className="flex-1 space-y-2">
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => setActiveMenu(menu.id)}
            className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left transition cursor-pointer
              ${
                activeMenu === menu.id
                  ? "bg-blue-100 text-blue-800 font-semibold"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-800"
              }`}
          >
            {menu.icon}
            {menu.label}
          </button>
        ))}
      </nav>

      {/* Tombol Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full text-white font-semibold
                   bg-gradient-to-r from-red-500 to-pink-500 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <FiLogOut size={20} />
        Keluar
      </button>
    </div>
  );
}
