import { SiFacebook, SiInstagram, SiLinkedin, SiTelegram, SiX } from "react-icons/si";
import { motion } from "framer-motion";

export default function CTA() {
  const socialLinks = [
    { icon: <SiFacebook />, href: "https://facebook.com" },
    { icon: <SiX />, href: "https://x.com" },
    { icon: <SiInstagram />, href: "https://instagram.com" },
    { icon: <SiLinkedin />, href: "https://linkedin.com" },
    { icon: <SiTelegram />, href: "https://telegram.org" },
  ];

  return (
    <section
      id="cta"
      className="relative py-28 px-6 text-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 animate-gradient-x -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-extrabold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Siap Membangun Masa Depan Bersama?
        </motion.h3>

        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bergabunglah sekarang, bantu UMKM bertumbuh, sekaligus bangun pengalaman dan portofolio Anda.
        </motion.p>

        <motion.a
          href="/login"
          className="mt-8 inline-block px-10 py-4 bg-white text-blue-950 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition transform hover:scale-105 animate-pulse"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Daftar Sekarang
        </motion.a>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition text-white hover:text-cyan-400"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: 0 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </section>
  );
}
