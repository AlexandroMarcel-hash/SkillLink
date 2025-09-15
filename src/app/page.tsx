"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CheckCircle } from "lucide-react";
import { HiOutlineLightningBolt, HiOutlineClipboardList, HiOutlineViewBoards, HiOutlineStar, HiOutlineGift } from "react-icons/hi";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* === Hero Section === */}
      <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto px-6 py-20 md:py-32">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center md:text-left"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
              initial={{ x: -300, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 80, damping: 20 }}
            >
              Digital Talent Exchange <br />
              untuk{" "}
              <motion.span
                className="text-cyan-400"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Mahasiswa & UMKM
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed"
              initial={{ x: -200, opacity: 0, y: 20 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, type: "spring", stiffness: 120, damping: 18 }}
            >
              SkillLink menghadirkan <b>platform barter keterampilan</b> berbasis AI
              yang menghubungkan mahasiswa berbakat dengan UMKM untuk kolaborasi,
              portofolio, dan pertumbuhan bersama.
            </motion.p>

            {/* Tombol CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
              initial={{ x: -150, opacity: 0, y: 30 }}
              animate={{ x: 0, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.a
                href="/login"
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Sekarang <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#about"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-50/10 transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Lebih Lanjut
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content (gambar floating) */}
          <motion.div
            className="flex justify-center order-last md:order-last"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 90 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
            src="/foto1.png"
            alt="SkillLink Illustration"
            width={1200}
            height={1200}
            className="w-full lg:w-[120%] max-w-none h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            priority
          />

            </motion.div>
          </motion.div>
        </div>
      </section>

     {/* === Features Section === */}
      <section id="features" className="bg-white py-32 px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>

          {/* Section Title */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Kenapa <span className="text-cyan-600">SkillLink</span>?
          </h3>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Fitur utama yang membedakan kami dari marketplace freelance biasa.
          </p>

          {/* Features Flex Wrap */}
          <div className="flex flex-wrap justify-center gap-16 mt-16">
            {[
              {
                title: "AI Matching Engine",
                desc: "Kecerdasan buatan yang otomatis mencocokkan kebutuhan UMKM dengan keterampilan mahasiswa berbakat. Mempercepat proses pencarian talenta yang tepat.",
                icon: <HiOutlineLightningBolt className="text-cyan-500 w-12 h-12 mb-4 mx-auto" />
              },
              {
                title: "Skill Portfolio Builder",
                desc: "Bangun portofolio nyata dari proyek yang kamu kerjakan bersama UMKM, memudahkan menampilkan hasil kerja kepada perusahaan atau klien.",
                icon: <HiOutlineClipboardList className="text-cyan-500 w-12 h-12 mb-4 mx-auto" />
              },
              {
                title: "Smart Task Board",
                desc: "Kelola tugas dan proyek dengan mudah menggunakan board interaktif. Memastikan semua anggota tim mengetahui progres dan deadline.",
                icon: <HiOutlineViewBoards className="text-cyan-500 w-12 h-12 mb-4 mx-auto" />
              },
              {
                title: "Feedback & Rating System",
                desc: "Dapatkan evaluasi dari UMKM dan mahasiswa lain untuk meningkatkan skill, kredibilitas, dan pengalaman kerja nyata.",
                icon: <HiOutlineStar className="text-cyan-500 w-12 h-12 mb-4 mx-auto" />
              },
              {
                title: "Freemium Access",
                desc: "Nikmati akses dasar gratis dengan opsi premium untuk fitur lanjutan, memberi fleksibilitas bagi semua pengguna.",
                icon: <HiOutlineGift className="text-cyan-500 w-12 h-12 mb-4 mx-auto" />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-[45%] lg:w-[30%] p-8 rounded-3xl shadow-lg hover:shadow-xl transition bg-blue-50"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {feature.icon}
                <h4 className="text-2xl font-semibold text-blue-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* === About Section === */}
      <section id="about" className="relative bg-gray-50 py-40 px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          
          {/* Left Side - Gambar dengan animasi awal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: typeof window !== "undefined" && window.innerWidth >= 768 ? -60 : 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center md:justify-end"
          >

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
                  src="/Logo.png"
                  alt="Tentang SkillLink"
                  width={800}
                  height={800}
                  className="w-full max-w-[80%] rounded-2xl shadow-2xl"
                />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-300 rounded-full blur-3xl"
          />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8 text-center md:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Tentang <span className="text-cyan-600">SkillLink</span>
            </h3>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              SkillLink adalah <b>platform barter keterampilan berbasis AI</b> yang
              menghubungkan mahasiswa berbakat dengan UMKM untuk menciptakan
              kolaborasi <span className="text-cyan-600 font-semibold">win-win</span>. 
              Kami hadir untuk mempercepat pertumbuhan digital, membangun portofolio nyata,
              serta membuka peluang baru bagi generasi muda dan UMKM lokal.
            </p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-12 pt-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-semibold text-cyan-700">Untuk Mahasiswa</h4>
                <p className="text-gray-600 mt-3 text-base md:text-lg leading-relaxed">
                  Tingkatkan skill, bangun portofolio nyata, dan dapatkan pengalaman
                  langsung dengan dunia usaha.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-2xl font-semibold text-cyan-700">Untuk UMKM</h4>
                <p className="text-gray-600 mt-3 text-base md:text-lg leading-relaxed">
                  Akses talenta muda berbakat dengan biaya terjangkau untuk
                  mempercepat digitalisasi bisnis.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === How It Works Section === */}
      <section id="how" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-16 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Bagaimana <span className="text-cyan-600">Cara Kerjanya?</span>
          </h3>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              {
                step: "1",
                title: "Registrasi",
                desc: "Mahasiswa dan UMKM membuat akun dan mengisi profil keterampilan atau kebutuhan."
              },
              {
                step: "2",
                title: "Posting Kebutuhan & AI Matching",
                desc: "UMKM posting proyek mereka. Sistem AI mencocokkan mahasiswa berbakat dengan kebutuhan tersebut, dan mahasiswa dapat apply sesuai skill."
              },
              {
                step: "3",
                title: "Kolaborasi & Portofolio Otomatis",
                desc: "Proyek dikerjakan bersama, hasil kolaborasi tercatat secara otomatis di portofolio digital mahasiswa."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl shadow-md bg-blue-50 hover:shadow-lg transition"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="text-cyan-500 text-4xl font-extrabold mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-blue-900">{item.title}</h4>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === Value Proposition Section (Rapi, Card Tengah) === */}
      <section id="value" className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>

          {/* Section Title */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Keunggulan <span className="text-cyan-600">SkillLink</span>
          </h3>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Mengapa mahasiswa & UMKM memilih SkillLink?
          </p>

          {/* Value Points Flex */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 text-left">
            {[
              "Akses kolaborasi tanpa biaya besar",
              "Portofolio digital nyata untuk mahasiswa",
              "Solusi digitalisasi praktis untuk UMKM",
              "Didukung AI cerdas & efisien",
              "Membangun jaringan kolaborasi berkelanjutan",
              "Meningkatkan daya saing di era digital",
              "Fleksibilitas akses freemium & premium",
            ].map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition min-h-[70px] w-[280px]"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <CheckCircle className="text-cyan-500 w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm md:text-base">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* === Business Model & Sustainability Section (Dynamic Animations) === */}
      <section id="business" className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Accent Line */}
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Business Model & <span className="text-cyan-600">Sustainability</span>
          </h3>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            SkillLink dirancang untuk berkelanjutan melalui model bisnis inklusif 
            dan strategi pertumbuhan komunitas.
          </p>

          {/* Business Model Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
            {[
              {
                title: "Freemium",
                desc: "Akses gratis untuk fitur dasar. Pengguna dapat merasakan manfaat utama SkillLink sebelum beralih ke paket berbayar.",
                icon: "💎",
              },
              {
                title: "Subscription",
                desc: "Paket berlangganan murah untuk mahasiswa & UMKM, memberikan fitur premium seperti prioritas matching & insight berbasis AI.",
                icon: "📈",
              },
              {
                title: "Komisi Transaksi",
                desc: "Persentase kecil dari transaksi premium untuk memastikan platform tetap berkelanjutan tanpa membebani pengguna.",
                icon: "💰",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl shadow-md bg-blue-50 hover:shadow-lg transition flex flex-col items-start min-h-[240px] text-left"
                initial={{
                  y: i % 2 === 0 ? 60 : 20,
                  x: i % 2 === 0 ? -30 : 30,
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.25, type: "spring", stiffness: 100 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-gray-700 text-base md:text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Sustainability / Growth Strategy */}
          <div className="mt-20 text-left">
            <h4 className="text-3xl font-extrabold text-cyan-600 mb-8">
              Strategi Pertumbuhan & Keberlanjutan
            </h4>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
              {[
                {
                  title: "Campus Ambassador",
                  desc: "Mahasiswa dilibatkan sebagai duta SkillLink di kampus untuk mempercepat adopsi platform.",
                  icon: "🎓",
                },
                {
                  title: "Workshop & Inovasi",
                  desc: "Kolaborasi dengan inkubator bisnis & komunitas UMKM melalui pelatihan digital, memperluas jaringan & menjaga keberlanjutan.",
                  icon: "🛠️",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="p-6 rounded-2xl shadow bg-gray-50 hover:shadow-md transition flex flex-col items-start min-h-[200px] text-left"
                  initial={{
                    x: i % 2 === 0 ? -100 : 100,
                    y: i % 2 === 0 ? 20 : 40,
                    opacity: 0,
                    rotate: i % 2 === 0 ? -2 : 2,
                  }}
                  whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.3, type: "spring", stiffness: 90 }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h5>
                  <p className="text-gray-700 text-base md:text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Reusable CTA === */}
      <CTA />

      {/* === Reusable Footer === */}
      <Footer />
    </div>
  );
}
