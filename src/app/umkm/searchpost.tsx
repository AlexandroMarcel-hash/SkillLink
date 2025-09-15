"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlusCircle, FiSearch } from "react-icons/fi";

export default function SearchPostUMKM() {
  const [search, setSearch] = useState("");
  const [needs] = useState([
    { id: 1, title: "Desain Logo", location: "Jakarta", type: "Barter", price: "Rp0 (Barter)" },
    { id: 2, title: "Landing Page UMKM", location: "Bandung", type: "Jasa", price: "Rp1.000.000 – Rp1.500.000" },
    { id: 3, title: "Konten Sosial Media", location: "Surabaya", type: "Barter", price: "Rp0 (Barter)" },
    { id: 4, title: "Aplikasi Kasir", location: "Yogyakarta", type: "Jasa", price: "Rp1.500.000 – Rp2.000.000" },
    { id: 5, title: "Video Promosi Produk", location: "Jakarta", type: "Jasa", price: "Rp500.000 – Rp1.200.000" },
    { id: 6, title: "Foto Produk Makanan", location: "Bandung", type: "Barter", price: "Rp0 (Barter)" },
    { id: 7, title: "Sistem Reservasi Hotel", location: "Bali", type: "Jasa", price: "Rp1.000.000 – Rp2.000.000" },
    { id: 8, title: "Desain Banner Event", location: "Semarang", type: "Jasa", price: "Rp250.000 – Rp750.000" },
  ]);

  const filtered = needs.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <h2 className="text-3xl font-bold text-blue-900 mb-3">🔍 Cari / Posting</h2>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl">
        Gunakan search untuk menemukan layanan, atau posting kebutuhan Anda.
        Semua harga sudah disesuaikan agar <b>terjangkau untuk UMKM</b> 👍
      </p>

      {/* Search Bar */}
      <div className="flex gap-3 mb-10">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari kebutuhan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-400 shadow-sm"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition"
        >
          <FiPlusCircle /> Posting
        </motion.button>
      </div>

      {/* List Needs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-blue-800">{n.title}</h3>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  n.type === "Barter"
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {n.type}
              </span>
            </div>
            <p className="text-sm text-gray-600">📍 {n.location}</p>
            <p className="text-sm font-semibold text-blue-700 mt-1">💰 {n.price}</p>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 italic col-span-full text-center">
            Tidak ada hasil ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
