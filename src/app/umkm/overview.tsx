"use client";

import { motion } from "framer-motion";
import { FiClipboard, FiCheckCircle, FiTrendingUp, FiStar } from "react-icons/fi";

export default function OverviewUMKM() {
  const stats = [
    { label: "Posting Kebutuhan", value: 12, icon: <FiClipboard />, color: "bg-blue-100 text-blue-700" },
    { label: "Proyek Aktif", value: 4, icon: <FiTrendingUp />, color: "bg-green-100 text-green-700" },
    { label: "Proyek Selesai", value: 9, icon: <FiCheckCircle />, color: "bg-purple-100 text-purple-700" },
    { label: "Rating Mahasiswa", value: "⭐ 4.7", icon: <FiStar />, color: "bg-yellow-100 text-yellow-700" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-6">📊 Ringkasan Aktivitas UMKM</h2>
      <p className="text-gray-700 mb-8">
        Pantau perkembangan posting, proyek, dan performa mahasiswa yang bekerja sama dengan bisnismu.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${stat.color} group-hover:scale-110 transition`}
            >
              {stat.icon}
            </div>

            {/* Value */}
            <h3 className="text-2xl font-bold text-blue-800">{stat.value}</h3>
            <p className="text-gray-600 text-sm mt-1">{stat.label}</p>

            {/* Glow effect saat hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
