"use client";

import { motion } from "framer-motion";
import { FiClipboard, FiCheckCircle, FiStar, FiTool } from "react-icons/fi";

export default function Overview() {
  const stats = [
    {
      label: "Proyek Aktif",
      value: 3,
      icon: <FiClipboard size={28} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      label: "Proyek Selesai",
      value: 7,
      icon: <FiCheckCircle size={28} />,
      color: "from-green-400 to-emerald-500",
    },
    {
      label: "Rating Rata-rata",
      value: "⭐ 4.6",
      icon: <FiStar size={28} />,
      color: "from-yellow-400 to-orange-400",
    },
    {
      label: "Skill Utama",
      value: "UI/UX Design",
      icon: <FiTool size={28} />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Ringkasan Aktivitas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start justify-between hover:shadow-xl transition relative overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-2xl`}
            />

            {/* Icon */}
            <div className="relative z-10 mb-4 p-3 bg-white rounded-xl shadow text-blue-700">
              {stat.icon}
            </div>

            {/* Value */}
            <h3 className="relative z-10 text-3xl font-extrabold text-blue-900">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="relative z-10 text-gray-700 font-medium mt-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
