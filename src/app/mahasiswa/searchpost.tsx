"use client";

import { useState } from "react";
import { FiPlusCircle, FiSearch } from "react-icons/fi";

export default function SearchPost() {
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
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">🔍 Cari / Posting</h2>
      <p className="text-gray-700 mb-6">
        Gunakan search untuk menemukan layanan, atau posting kebutuhan Anda.
        Semua harga sudah disesuaikan agar <b>terjangkau untuk UMKM</b> 👍
      </p>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari kebutuhan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <FiPlusCircle /> Posting
        </button>
      </div>

      {/* List Needs */}
      <div className="grid gap-4">
        {filtered.map((n) => (
          <div
            key={n.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer border border-gray-100 hover:border-blue-200"
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
            <p className="text-sm text-gray-600">Lokasi: {n.location}</p>
            <p className="text-sm font-semibold text-blue-700 mt-1">
              Harga: {n.price}
            </p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 italic">Tidak ada hasil ditemukan.</p>
        )}
      </div>
    </div>
  );
}
