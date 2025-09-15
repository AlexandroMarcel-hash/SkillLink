"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Landing Page UMKM", status: "Sedang Berlangsung" },
    { title: "Aplikasi Reservasi", status: "Selesai" },
    { title: "Branding Sosial Media", status: "Sedang Berlangsung" },
    { title: "Desain Logo UMKM", status: "Selesai" },
  ];

  const statuses = ["Sedang Berlangsung", "Selesai"];

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "Sedang Berlangsung":
        return "bg-blue-100 text-blue-700";
      case "Selesai":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Proyek & Task Board</h2>
      <p className="text-gray-700 mb-8">
        Lihat daftar proyek yang sedang kamu kerjakan bersama UMKM.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {statuses.map((status, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{status}</h3>
            <div className="space-y-4">
              {projects
                .filter((p) => p.status === status)
                .map((p, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl border-l-4 border-blue-500 relative"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      {p.title}
                    </h4>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getBadgeColor(
                        p.status
                      )}`}
                    >
                      {p.status}
                    </span>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
