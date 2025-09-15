"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiUser, FiMessageSquare } from "react-icons/fi";

type Feedback = {
  id: number;
  mahasiswa: string;
  proyek: string;
  rating: number;
  komentar: string;
};

export default function UMKMFeedback() {
  const [feedbackList] = useState<Feedback[]>([
    {
      id: 1,
      mahasiswa: "Andi Pratama",
      proyek: "Desain Logo Kopi Kenangan",
      rating: 5,
      komentar: "Hasil desain sangat profesional dan sesuai request. Recommended!",
    },
    {
      id: 2,
      mahasiswa: "Siti Nurhaliza",
      proyek: "Foto Produk Fashion",
      rating: 4,
      komentar: "Foto produk bagus, hanya saja revisi agak lambat. Overall memuaskan.",
    },
    {
      id: 3,
      mahasiswa: "Budi Santoso",
      proyek: "Website Toko Online",
      rating: 5,
      komentar: "Website cepat selesai, responsif, dan mudah digunakan. Mantap!",
    },
    {
      id: 4,
      mahasiswa: "Rina Amelia",
      proyek: "Video Promosi Makanan",
      rating: 4,
      komentar: "Video menarik, tapi ada beberapa detail kecil yang bisa diperbaiki.",
    },
  ]);

  return (
    <div className="w-full px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 mb-3">⭐ Feedback & Rating</h2>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl">
        Lihat umpan balik dari proyek yang sudah selesai. Gunakan informasi ini untuk mengevaluasi dan memilih mahasiswa terbaik di proyek berikutnya.
      </p>

      {/* Daftar Feedback */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbackList.map((f, i) => (
          <motion.div
            key={f.id}
            className="bg-white p-6 rounded-2xl shadow-md border relative group cursor-pointer overflow-hidden hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            {/* Mahasiswa Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full shadow-inner group-hover:bg-blue-200 transition">
                <FiUser size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition">
                  {f.mahasiswa}
                </h3>
                <p className="text-sm text-gray-600">{f.proyek}</p>
              </div>
            </div>

            {/* Rating Bintang */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FiStar
                  key={idx}
                  className={idx < f.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-700">
                {f.rating}/5
              </span>
            </div>

            {/* Komentar */}
            <div className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
              <FiMessageSquare className="text-blue-500 mt-1" size={16} />
              <p>{f.komentar}</p>
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
