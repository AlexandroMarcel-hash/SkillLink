"use client";

import { useState, useEffect } from "react";
import { FiEdit2, FiSave, FiUser, FiMail, FiStar, FiLink, FiBriefcase } from "react-icons/fi";

type User = {
  nama: string;
  email: string;
  skills: string[];
  umkmNeeds: string[];
  portfolio: string[];
  rating: number;
  barterPreference: "Layanan" | "Uang";
};

export default function ProfilePage() {
  const [user, setUser] = useState<User>({
    nama: "",
    email: "",
    skills: [],
    umkmNeeds: [],
    portfolio: [],
    rating: 3,
    barterPreference: "Layanan",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (storedUser) {
      setUser({
        nama: storedUser.nama || "",
        email: storedUser.email || "",
        skills: storedUser.skills || [],
        umkmNeeds: storedUser.umkmNeeds || [],
        portfolio: storedUser.portfolio || [],
        rating: storedUser.rating || 3,
        barterPreference: storedUser.barterPreference || "Layanan",
      });
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));
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
          <h1 className="text-4xl font-bold text-blue-900">Profil Mahasiswa</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            <FiEdit2 />
            {isEditing ? "Batal" : "Edit Profil"}
          </button>
        </div>

        {/* Nama & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Nama Lengkap</label>
            {isEditing ? (
              <input
                type="text"
                value={user.nama}
                onChange={(e) => setUser({ ...user, nama: e.target.value })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiUser className="text-blue-500 text-2xl mt-1" />
                <span className="text-lg font-medium">{user.nama || "-"}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiMail className="text-blue-500 text-2xl mt-1" />
                <span className="text-lg font-medium">{user.email || "-"}</span>
              </div>
            )}
          </div>
        </div>

        {/* Skills & Kebutuhan UMKM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Skills */}
            <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
                Keterampilan / Skills
            </label>
            {isEditing ? (
                <textarea
                placeholder="Tulis skill lengkap, setiap skill di baris baru"
                value={user.skills?.join("\n")}
                onChange={(e) =>
                    setUser({
                    ...user,
                    skills: e.target.value.split("\n"), // jangan trim()
                    })
                }
                className={inputClass + " h-40 resize-none"} // Editable tetap tinggi 40
                />
            ) : (
                <div className="p-5 bg-gray-50 rounded-2xl shadow-md cursor-pointer hover:bg-gray-100 transition min-h-[100px] max-h-28 overflow-y-auto">
                <FiBriefcase className="text-green-500 text-2xl mb-2" />
                {user.skills?.length ? (
                    <ul className="list-disc list-inside text-gray-800 space-y-1 mt-2">
                    {user.skills.map((skill, idx) => (
                        <li key={idx}>{skill}</li>
                    ))}
                    </ul>
                ) : (
                    <span className="text-gray-500">-</span>
                )}
                </div>
            )}
            </div>

          {/* Kebutuhan UMKM */}
            <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Kebutuhan UMKM</label>
            {isEditing ? (
                <input
                type="text"
                placeholder="Pisahkan dengan koma"
                value={user.umkmNeeds?.join(", ")}
                onChange={(e) =>
                    setUser({ ...user, umkmNeeds: e.target.value.split(",") }) // Hapus trim()
                }
                className={inputClass}
                />
            ) : (
                <div className={cardClass}>
                <FiBriefcase className="text-yellow-500 text-2xl mt-1" />
                <span className="text-lg font-medium">{user.umkmNeeds?.join(", ") || "-"}</span>
                </div>
            )}
            </div>
          </div>

        {/* Portfolio & Rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Portfolio */}
            <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Portofolio</label>
                {isEditing ? (
                <textarea
                    placeholder="Tulis portofolio / karya lengkap"
                    value={user.portfolio?.join("\n")}
                    onChange={(e) =>
                    setUser({ ...user, portfolio: e.target.value.split("\n").map((s) => s.trim()) })
                    }
                    className={inputClass + " h-40 resize-none"} // Editable tetap tinggi 40
                />
                ) : (
                <div className="p-5 bg-gray-50 rounded-2xl shadow-md cursor-pointer hover:bg-gray-100 transition min-h-[100px] max-h-28 overflow-y-auto">
                    <FiLink className="text-purple-500 text-2xl mb-2" />
                    {user.portfolio?.length ? (
                    <ul className="list-disc list-inside text-gray-800 space-y-1 mt-2">
                        {user.portfolio.map((item, idx) => (
                        <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    ) : (
                    <span className="text-gray-500">-</span>
                    )}
                </div>
                )}
            </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">Rating Awal</label>
            {isEditing ? (
              <input
                type="number"
                min={1}
                max={5}
                value={user.rating}
                onChange={(e) => setUser({ ...user, rating: parseInt(e.target.value) })}
                className={inputClass}
              />
            ) : (
              <div className={cardClass}>
                <FiStar className="text-yellow-400 text-2xl mt-1" />
                <span className="text-lg font-medium">{user.rating}</span>
              </div>
            )}
          </div>
        </div>

        {/* Preferensi Barter */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Preferensi Barter</label>
          {isEditing ? (
            <select
              value={user.barterPreference}
              onChange={(e) =>
                setUser({ ...user, barterPreference: e.target.value as "Layanan" | "Uang" })
              }
              className={inputClass}
            >
              <option value="Layanan">Layanan</option>
              <option value="Uang">Uang</option>
            </select>
          ) : (
            <div className={cardClass}>
              <FiBriefcase className="text-blue-400 text-2xl mt-1" />
              <span className="text-lg font-medium">{user.barterPreference}</span>
            </div>
          )}
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
