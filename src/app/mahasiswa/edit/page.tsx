"use client";
import { useState, useEffect } from "react";
import { FiStar, FiSave } from "react-icons/fi";
import { useRouter } from "next/navigation";

type User = {
  nama: string;
  email: string;
  skills: string[];
  umkmNeeds: string[];
  portfolio: string[];
  rating: number;
  barterPreference: "Layanan" | "Uang";
  profilLengkap?: boolean;
};

export default function EditProfile() {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    nama: "",
    email: "",
    skills: [],
    umkmNeeds: [],
    portfolio: [],
    rating: 3,
    barterPreference: "Layanan",
    profilLengkap: false,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (storedUser) setUser((prev) => ({ ...prev, ...storedUser }));
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ ...user, profilLengkap: true })
    );
    router.push("/mahasiswa/profile");
  };

  const inputClass =
    "w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 text-gray-900";

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Lengkapi Profil</h1>

      {/* Nama & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Nama lengkap"
          value={user.nama}
          onChange={(e) => setUser({ ...user, nama: e.target.value })}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className={inputClass}
        />
      </div>

      {/* Skills */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Keterampilan / Skills</label>
        <input
          type="text"
          placeholder="Desain grafis, Pemasaran digital"
          value={user.skills.join(", ")}
          onChange={(e) =>
            setUser({ ...user, skills: e.target.value.split(",").map((s) => s.trim()) })
          }
          className={inputClass}
        />
      </div>

      {/* Kebutuhan UMKM */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Kebutuhan UMKM</label>
        <input
          type="text"
          placeholder="Logo branding, Konsultasi IT"
          value={user.umkmNeeds.join(", ")}
          onChange={(e) =>
            setUser({ ...user, umkmNeeds: e.target.value.split(",").map((s) => s.trim()) })
          }
          className={inputClass}
        />
      </div>

      {/* Portfolio */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Portofolio</label>
        <input
          type="text"
          placeholder="Link portofolio / karya"
          value={user.portfolio.join(", ")}
          onChange={(e) =>
            setUser({ ...user, portfolio: e.target.value.split(",").map((s) => s.trim()) })
          }
          className={inputClass}
        />
      </div>

      {/* Rating */}
      <div className="mb-4 flex items-center gap-3">
        <label className="font-semibold">Rating awal</label>
        <input
          type="number"
          min={1}
          max={5}
          value={user.rating}
          onChange={(e) => setUser({ ...user, rating: parseInt(e.target.value) })}
          className="border px-3 py-1 rounded-lg w-20 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
        />
        <FiStar className="text-yellow-400" size={24} />
      </div>

      {/* Preferensi barter */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Preferensi Barter</label>
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
      </div>

      {/* Button Simpan */}
      <button
        onClick={handleSave}
        className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        <FiSave size={20} />
        Simpan Profil
      </button>
    </div>
  );
}
