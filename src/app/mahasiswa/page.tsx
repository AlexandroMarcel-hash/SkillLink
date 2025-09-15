"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import Sidebar from "../components/mahasiswa/Sidebar";
import Overview from "./overview";
import Profile from "./profile";
import Projects from "./projects";
import Portfolio from "./portfolio";
import Feedback from "./feedback";
import AIMatching from "./aimatching"; // pastikan path sesuai
import SearchPost from "./searchpost"; 



type User = {
  nama: string;
  email: string;
  password: string;
  role: "mahasiswa" | "umkm";
};

export default function MahasiswaDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [activeMenu, setActiveMenu] = useState("overview");
  const [isOpen, setIsOpen] = useState(false); // untuk mobile sidebar

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!storedUser || storedUser.role !== "mahasiswa") {
      router.push("/login");
    } else {
      setUser(storedUser);
    }
  }, [router]);

  if (!user) return null;

  const renderContent = () => {
  switch (activeMenu) {
    case "overview":
      return <Overview />;
    case "ai-matching":
      return <AIMatching />;
    case "profile":
      return <Profile />;
    case "projects":
      return <Projects />;
    case "portfolio":
      return <Portfolio />;
    case "feedback":
      return <Feedback />;
    case "search-post": // ✅ case baru
      return <SearchPost />;
    default:
      return null;
  }
};


  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </aside>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <FiX size={24} className="text-gray-700" />
              </button>
            </div>
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Konten */}
      <main className="flex-1 p-6 md:p-10 md:ml-64">
        {/* Tombol hamburger mobile */}
        <button
          className="md:hidden mb-4 p-2 rounded-lg bg-blue-600 text-white"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={24} />
        </button>

        {renderContent()}
      </main>
    </div>
  );
}
