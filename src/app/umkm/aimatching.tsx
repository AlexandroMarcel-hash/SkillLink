"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiStar, FiUser, FiSearch } from "react-icons/fi";

type Mahasiswa = {
  id: number;
  nama: string;
  lokasi: string;
  skill: string[];
  rating: number;
};

export default function AIMatchingUMKM() {
  const [mahasiswaList] = useState<Mahasiswa[]>([
    { id: 1, nama: "Andi Pratama", lokasi: "Jakarta", skill: ["UI/UX", "React"], rating: 4.7 },
    { id: 2, nama: "Siti Nurhaliza", lokasi: "Bandung", skill: ["Desain Grafis", "Illustrator"], rating: 4.9 },
    { id: 3, nama: "Budi Santoso", lokasi: "Yogyakarta", skill: ["Web Dev", "Laravel"], rating: 4.5 },
    { id: 4, nama: "Rina Amelia", lokasi: "Surabaya", skill: ["Video Editing", "Premiere Pro"], rating: 4.8 },
  ]);

  const [filterLokasi, setFilterLokasi] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const filtered = mahasiswaList.filter(
    (m) =>
      (filterLokasi === "" || m.lokasi === filterLokasi) &&
      (filterRating === 0 || m.rating >= filterRating)
  );

  return (
    <div className="w-full px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 mb-3">🤖 AI Matching</h2>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-3xl">
        Rekomendasi mahasiswa yang sesuai dengan kebutuhanmu. Gunakan filter untuk menemukan yang paling cocok.
      </p>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 mb-10">
        <select
          className="px-4 py-2 bg-white text-black border rounded-xl shadow-sm hover:border-blue-400 hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 transition"
          value={filterLokasi}
          onChange={(e) => setFilterLokasi(e.target.value)}
        >
          <option value="">📍 Filter Lokasi</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bandung">Bandung</option>
          <option value="Yogyakarta">Yogyakarta</option>
          <option value="Surabaya">Surabaya</option>
        </select>

        <select
          className="px-4 py-2 bg-white text-black border rounded-xl shadow-sm hover:border-blue-400 hover:bg-blue-50 focus:ring-2 focus:ring-blue-400 transition"
          value={filterRating}
          onChange={(e) => setFilterRating(Number(e.target.value))}
        >
          <option value={0}>⭐ Rating Minimal</option>
          <option value={4}>⭐ 4.0+</option>
          <option value={4.5}>⭐ 4.5+</option>
          <option value={4.8}>⭐ 4.8+</option>
        </select>
      </div>

      {/* Daftar Mahasiswa */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((m, i) => (
          <motion.div
            key={m.id}
            className="bg-white p-6 rounded-2xl shadow-md border relative group cursor-pointer overflow-hidden transition-all"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full shadow-inner group-hover:bg-blue-200 transition">
                <FiUser size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600 transition">
                  {m.nama}
                </h3>
                <p className="flex items-center text-sm text-gray-600 gap-1">
                  <FiMapPin size={14} /> {m.lokasi}
                </p>
              </div>
            </div>

            {/* Skill */}
            <div className="flex flex-wrap gap-2 mb-4">
              {m.skill.map((s, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-5">
              <FiStar className="text-yellow-400" />
              <span className="font-medium">{m.rating}</span>
            </div>

            {/* Tombol Aksi */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 hover:shadow-lg transition"
            >
              <FiSearch className="inline-block mr-2" />
              Lihat Profil
            </motion.button>

            {/* Glow border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
