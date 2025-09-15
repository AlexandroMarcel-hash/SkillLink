"use client";

import { useState, useEffect } from "react";
import { FiEdit2, FiSave, FiMail, FiPhone, FiMapPin, FiBriefcase, FiStar, FiShoppingBag } from "react-icons/fi";

type UMKM = {
  namaUsaha: string;
  email: string;
  telepon: string;
  lokasi: string;
  kategori: string[];
  deskripsi: string;
  produk: string[];
  rating: number;
};

export default function ProfileUMKM() {
  const [umkm, setUmkm] = useState<UMKM>({
    namaUsaha: "",
    email: "",
    telepon: "",
    lokasi: "",
    kategori: [],
    deskripsi: "",
    produk: [],
    rating: 4.5,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUMKM = JSON.parse(localStorage.getItem("currentUMKM") || "null");
    if (storedUMKM) setUmkm(storedUMKM);
  }, []);

  const handleSave = () => {
    localStorage.setItem("currentUMKM", JSON.stringify(umkm));
    setIsEditing(false);
  };

  const inputClass =
    "w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-900";

  const cardClass =
    "flex items-start gap-4 p-5 bg-gray-50 rounded-2xl shadow-md text-gray-800 min-h-[60px]";

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto p-10 bg-white shadow-2xl rounded-3xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <h1 className="text-4xl font-bold text-blue-900">🏪 Profil UMKM</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            <FiEdit2 />
            {isEditing ? "Batal" : "Edit Profil"}
          </button>
        </div>

        {/* Nama Usaha */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Nama Usaha</label>
          {isEditing ? (
            <input
              type="text"
              value={umkm.namaUsaha}
              onChange={(e) => setUmkm({ ...umkm, namaUsaha: e.target.value })}
              className={inputClass}
            />
          ) : (
            <div className={cardClass}>{umkm.namaUsaha || "-"}</div>
          )}
        </div>

        {/* Email & Telepon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={umkm.email}
                onChange={(e) => setUmkm({ ...umkm, email: e.target.value })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiMail className="text-blue-500 text-xl mt-1" />
                {umkm.email || "-"}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Telepon</label>
            {isEditing ? (
              <input
                type="text"
                value={umkm.telepon}
                onChange={(e) => setUmkm({ ...umkm, telepon: e.target.value })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiPhone className="text-green-500 text-xl mt-1" />
                {umkm.telepon || "-"}
              </div>
            )}
          </div>
        </div>

        {/* Lokasi & Kategori */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Lokasi</label>
            {isEditing ? (
              <input
                type="text"
                value={umkm.lokasi}
                onChange={(e) => setUmkm({ ...umkm, lokasi: e.target.value })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiMapPin className="text-red-500 text-xl mt-1" />
                {umkm.lokasi || "-"}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Kategori Usaha</label>
            {isEditing ? (
              <input
                type="text"
                placeholder="Pisahkan dengan koma"
                value={umkm.kategori.join(", ")}
                onChange={(e) => setUmkm({ ...umkm, kategori: e.target.value.split(",") })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiBriefcase className="text-purple-500 text-xl mt-1" />
                {umkm.kategori.join(", ") || "-"}
              </div>
            )}
          </div>
        </div>

        {/* Deskripsi Usaha */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Deskripsi Usaha</label>
          {isEditing ? (
            <textarea
              value={umkm.deskripsi}
              onChange={(e) => setUmkm({ ...umkm, deskripsi: e.target.value })}
              className={inputClass + " h-32 resize-none"}
            />
          ) : (
            <div className={cardClass}>{umkm.deskripsi || "-"}</div>
          )}
        </div>

        {/* Produk */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Produk / Layanan</label>
          {isEditing ? (
            <textarea
              placeholder="Tulis produk atau layanan, pisahkan baris"
              value={umkm.produk.join("\n")}
              onChange={(e) => setUmkm({ ...umkm, produk: e.target.value.split("\n") })}
              className={inputClass + " h-32 resize-none"}
            />
          ) : (
            <div className="p-5 bg-gray-50 rounded-2xl shadow-md min-h-[100px]">
              <FiShoppingBag className="text-orange-500 text-xl mb-2" />
              {umkm.produk.length ? (
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {umkm.produk.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-gray-500">-</span>
              )}
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Rating</label>
          <div className={cardClass}>
            <FiStar className="text-yellow-400 text-xl mt-1" />
            <span className="font-medium">{umkm.rating}</span>
          </div>
        </div>

        {/* Button Simpan */}
        {isEditing && (
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FiSave size={22} />
            Simpan Profil
          </button>
        )}
      </div>
    </div>
  );
}
