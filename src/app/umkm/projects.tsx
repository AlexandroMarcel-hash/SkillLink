"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiPlayCircle, FiCheckCircle, FiUsers } from "react-icons/fi";

type Project = {
  id: number;
  title: string;
  mahasiswa: string;
  status: "Menunggu" | "Berjalan" | "Selesai";
};

export default function UMKMProjects() {
  const [projects] = useState<Project[]>([
    { id: 1, title: "Desain Logo Kopi Kenangan", mahasiswa: "Belum ada", status: "Menunggu" },
    { id: 2, title: "Aplikasi Kasir UMKM", mahasiswa: "Andi Pratama", status: "Berjalan" },
    { id: 3, title: "Foto Produk Fashion", mahasiswa: "Siti Nurhaliza", status: "Selesai" },
    { id: 4, title: "Strategi Digital Marketing", mahasiswa: "Belum ada", status: "Menunggu" },
    { id: 5, title: "Website Toko Online", mahasiswa: "Budi Santoso", status: "Berjalan" },
    { id: 6, title: "Video Promosi Makanan", mahasiswa: "Rina Amelia", status: "Selesai" },
  ]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700 border-yellow-300 animate-bounce";
      case "Berjalan":
        return "bg-blue-100 text-blue-700 border-blue-300 animate-pulse";
      case "Selesai":
        return "bg-green-100 text-green-700 border-green-300";
      default:
        return "";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Menunggu":
        return <FiClock className="text-yellow-500" size={22} />;
      case "Berjalan":
        return <FiPlayCircle className="text-blue-500" size={22} />;
      case "Selesai":
        return <FiCheckCircle className="text-green-500" size={22} />;
    }
  };

  return (
    <div className="w-full px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 mb-3">📂 Manajemen Proyek</h2>
      <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl">
        Lihat daftar proyek yang sudah kamu posting. Pantau statusnya, kelola mahasiswa yang apply, 
        dan selesaikan proyek bersama untuk hasil terbaik.
      </p>

      {/* Grid Proyek */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="bg-white p-6 rounded-2xl shadow-md border relative group cursor-pointer overflow-hidden 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {/* Header Proyek */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition">
                {p.title}
              </h3>
              {getStatusIcon(p.status)}
            </div>

            {/* Status */}
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(p.status)}`}>
              {p.status}
            </span>

            {/* Mahasiswa */}
            <div className="mt-4 flex items-center gap-2 text-gray-700 group-hover:text-blue-600 transition">
              <FiUsers className="text-gray-500" size={18} />
              <span className="text-sm">
                {p.mahasiswa === "Belum ada"
                  ? "Belum ada mahasiswa"
                  : `Dikerjakan oleh ${p.mahasiswa}`}
              </span>
            </div>

            {/* Hover gradient border glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] 
                            transition duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
