"use client";

import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function Feedback() {
  const feedbacks = [
    { from: "UMKM A", comment: "Kerja cepat dan rapi, sangat profesional!", rating: 5 },
    { from: "UMKM B", comment: "Hasil desain sangat sesuai harapan.", rating: 4 },
    { from: "UMKM C", comment: "Kreatif dan komunikatif.", rating: 5 },
  ];

  // hitung rata-rata rating
  const avgRating =
    feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">
            Feedback & Rating
          </h2>
          <p className="text-gray-700">
            Ulasan dari UMKM akan membantu meningkatkan kredibilitasmu.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <span className="text-yellow-400 text-2xl">⭐</span>
          <p className="font-semibold text-blue-800">
            {avgRating.toFixed(1)} / 5
          </p>
          <span className="text-gray-500 text-sm">
            ({feedbacks.length} ulasan)
          </span>
        </div>
      </div>

      {/* Grid Feedback */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((f, i) => (
          <motion.div
            key={i}
            className="relative bg-white rounded-2xl shadow-md p-6 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Glow border saat hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400 transition duration-300"></div>

            {/* Header (Avatar + Nama UMKM) */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold shadow-inner">
                <FiUser />
              </div>
              <p className="font-semibold text-blue-800">{f.from}</p>
            </div>

            {/* Komentar */}
            <p className="text-gray-600 mb-4 italic relative z-10">
              &quot;{f.comment}&quot;
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 relative z-10">
              {[...Array(5)].map((_, starIndex) => (
                <motion.span
                  key={starIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 + starIndex * 0.1 }}
                  className={
                    starIndex < f.rating
                      ? "text-yellow-400 text-lg"
                      : "text-gray-300 text-lg"
                  }
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
