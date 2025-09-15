"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Portfolio() {
  const portfolio = [
    {
      project: "Landing Page UMKM",
      description: "Membuat UI/UX landing page untuk UMKM",
      image: "https://source.unsplash.com/400x250/?website,design",
      link: "#",
    },
    {
      project: "Aplikasi Reservasi",
      description: "Mengembangkan front-end aplikasi reservasi",
      image: "https://source.unsplash.com/400x250/?app,code",
      link: "#",
    },
    {
      project: "Branding Sosial Media",
      description: "Desain konten kreatif untuk UMKM",
      image: "https://source.unsplash.com/400x250/?branding,design",
      link: "#",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Portofolio Digital</h2>
      <p className="text-gray-700 mb-8">
        Semua hasil kerja akan otomatis tercatat di portofolio digitalmu.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden group relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Thumbnail dengan hover zoom */}
            <div className="h-40 w-full relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.project}
                width={400}
                height={250}
                unoptimized
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {item.project}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>

              <a
                href={item.link}
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                Lihat Detail <FiExternalLink className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
