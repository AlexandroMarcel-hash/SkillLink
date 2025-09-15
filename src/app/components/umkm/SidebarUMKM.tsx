"use client";

import {
  FiTrendingUp,
  FiPlusCircle,
  FiClipboard,
  FiLayers,
  FiStar,
  FiBarChart2,
  FiLogOut,
  FiUser,
  FiSearch,
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

export default function SidebarUMKM({ activeMenu, setActiveMenu }: SidebarProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (storedUser) setUser(storedUser);
  }, []);

  const menus = [
    { id: "overview", label: "Ringkasan", icon: <FiTrendingUp size={20} /> },
    { id: "profile", label: "Profil UMKM", icon: <FiUser size={20} /> },
    { id: "posting", label: "Posting Kebutuhan", icon: <FiPlusCircle size={20} /> },
    { id: "projects", label: "Manajemen Proyek", icon: <FiClipboard size={20} /> },
    { id: "ai-matching", label: "AI Matching", icon: <FiLayers size={20} /> },
    { id: "feedback", label: "Feedback & Rating", icon: <FiStar size={20} /> },
    { id: "insight", label: "Insight", icon: <FiBarChart2 size={20} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/");
  };

  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col h-screen overflow-y-auto sticky top-0">
      {/* Logo */}
      <h1
        onClick={() => router.push("/umkm/overview")}
        className="text-2xl font-bold text-blue-900 mb-6 cursor-pointer hover:text-blue-700 transition"
      >
        SkillLink
      </h1>

      {/* 🔍 Search Bar */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Cari menu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* User Section */}
      {user && (
        <div
          onClick={() => setActiveMenu("profile")}
          className="mb-6 px-3 py-3 rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-all"
        >
          <p className="text-gray-500 text-sm">Halo,</p>
          <h2 className="text-lg font-semibold text-blue-900 truncate">{user.nama}</h2>
        </div>
      )}

      {/* Menu */}
      <nav className="flex-1 space-y-1">
        {menus
          .filter((menu) =>
            menu.label.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-left transition cursor-pointer
                ${
                  activeMenu === menu.id
                    ? "bg-blue-100 text-blue-800 font-semibold shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                }`}
            >
              {menu.icon}
              {menu.label}
            </button>
          ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-white font-semibold
                   bg-gradient-to-r from-red-500 to-pink-500 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <FiLogOut size={20} />
        Keluar
      </button>
    </div>
  );
}
