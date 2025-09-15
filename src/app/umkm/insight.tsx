"use client";

import { motion } from "framer-motion";
import { FiBarChart2, FiClipboard, FiUsers, FiStar } from "react-icons/fi";

export default function UMKMInsight() {
  const stats = [
    {
      id: 1,
      title: "Total Posting",
      value: 12,
      icon: <FiClipboard size={22} />,
      color: "from-blue-100 to-blue-50 text-blue-600",
    },
    {
      id: 2,
      title: "Mahasiswa Apply",
      value: 37,
      icon: <FiUsers size={22} />,
      color: "from-purple-100 to-purple-50 text-purple-600",
    },
    {
      id: 3,
      title: "Proyek Selesai",
      value: 8,
      icon: <FiBarChart2 size={22} />,
      color: "from-green-100 to-green-50 text-green-600",
    },
    {
      id: 4,
      title: "Rata-rata Rating",
      value: "4.6",
      icon: <FiStar size={22} />,
      color: "from-yellow-100 to-yellow-50 text-yellow-600",
    },
  ];

  return (
    <div className="w-full px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 mb-3">📊 Insight & Statistik</h2>
      <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl">
        Pantau performa posting dan proyek kamu. Lihat berapa mahasiswa yang tertarik,
        berapa proyek selesai, dan rata-rata rating untuk evaluasi lebih baik.
      </p>

      {/* Statistik Card */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.id}
            className="relative bg-white p-6 rounded-2xl shadow-md border group cursor-pointer overflow-hidden hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, scale: 1.03 }}
          >
            {/* Background gradient hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${s.color}`} />

            {/* Icon */}
            <motion.div
              className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md mb-4"
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {s.icon}
            </motion.div>

            {/* Value & Title */}
            <h3 className="relative text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition">
              {s.value}
            </h3>
            <p className="relative text-gray-600 group-hover:text-gray-800 transition">{s.title}</p>

            {/* Spotlight Effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Mini Chart Section */}
      <motion.div
        className="mt-12 bg-white p-8 rounded-2xl shadow-md border relative overflow-hidden hover:shadow-2xl transition cursor-pointer"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileHover={{ y: -5, scale: 1.01 }}
      >
        <h3 className="text-xl font-semibold text-blue-900 mb-6">📈 Aktivitas Bulanan</h3>
        <div className="relative w-full h-44 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex items-end gap-2 p-4 overflow-hidden">
          {/* Fake chart bars */}
          {[50, 70, 40, 90, 60, 80, 100].map((h, idx) => (
            <motion.div
              key={idx}
              className="flex-1 bg-blue-400 rounded-t-lg hover:bg-blue-500 transition"
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ delay: idx * 0.15, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            />
          ))}

          {/* Trend line effect */}
          <motion.div
            className="absolute bottom-8 left-4 right-4 h-0.5 bg-blue-600 opacity-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>
        <p className="mt-4 text-gray-600 text-sm">Jumlah mahasiswa apply dalam 7 bulan terakhir.</p>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-purple-200 transition duration-300 pointer-events-none"></div>
      </motion.div>
    </div>
  );
}
