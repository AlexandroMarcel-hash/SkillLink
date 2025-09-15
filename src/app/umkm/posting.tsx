"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiCheckCircle, FiPlayCircle } from "react-icons/fi";

export default function ProjectsUMKM() {
  const [projects] = useState([
    { id: 1, title: "Desain Logo Brand", status: "Menunggu", mahasiswa: 3, deadline: "10 Hari" },
    { id: 2, title: "Landing Page UMKM", status: "Sedang Berjalan", mahasiswa: 1, deadline: "25 Hari" },
    { id: 3, title: "Video Promosi Produk", status: "Selesai", mahasiswa: 2, deadline: "15 Hari" },
    { id: 4, title: "Foto Produk Profesional", status: "Menunggu", mahasiswa: 5, deadline: "7 Hari" },
    { id: 5, title: "Manajemen Sosial Media", status: "Sedang Berjalan", mahasiswa: 2, deadline: "30 Hari" },
    { id: 6, title: "Aplikasi Kasir UMKM", status: "Selesai", mahasiswa: 1, deadline: "40 Hari" },
  ]);

  // warna badge status
  const statusColor = {
    Menunggu: "bg-yellow-100 text-yellow-700",
    "Sedang Berjalan": "bg-blue-100 text-blue-700",
    Selesai: "bg-green-100 text-green-700",
  };

  const statusIcon = {
    Menunggu: <FiClock className="text-yellow-600" />,
    "Sedang Berjalan": <FiPlayCircle className="text-blue-600" />,
    Selesai: <FiCheckCircle className="text-green-600" />,
  };

  return (
    <div className="w-full px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 mb-3">📌 Posting Kebutuhan</h2>
      <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl">
        Kelola semua proyek yang kamu posting. Pantau status, jumlah mahasiswa yang mendaftar, 
        dan progress pengerjaan dengan mudah.
      </p>

      {/* Grid daftar proyek */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 relative group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            {/* Judul */}
            <h3 className="text-lg font-semibold text-blue-800 mb-3 group-hover:text-blue-600 transition">
              {p.title}
            </h3>

            {/* Status */}
            <div className="flex items-center gap-2 mb-3">
              {statusIcon[p.status as keyof typeof statusIcon]}
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${statusColor[p.status as keyof typeof statusColor]}`}
              >
                {p.status}
              </span>
            </div>

            {/* Info tambahan */}
            <div className="text-sm text-gray-600 space-y-2">
              <p>👨‍🎓 Mahasiswa Apply: <span className="font-medium text-gray-800">{p.mahasiswa}</span></p>
              <p>⏳ Deadline: <span className="font-medium text-gray-800">{p.deadline}</span></p>
            </div>

            {/* Glow efek hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
