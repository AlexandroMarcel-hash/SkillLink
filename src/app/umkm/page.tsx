"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import SidebarUMKM from "../components/umkm/SidebarUMKM";
import Overview from "./overview";
import Posting from "./posting";
import Projects from "./projects";
import AIMatching from "./aimatching";
import Feedback from "./feedback";
import Insight from "./insight";
import Profile from "./profile";
import SearchPostUMKM from "./searchpost"; // ✅ tambahin import

type User = {
  nama: string;
  email: string;
  password: string;
  role: "mahasiswa" | "umkm";
};

export default function UMKMDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [activeMenu, setActiveMenu] = useState("overview");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (!storedUser || storedUser.role !== "umkm") {
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
      case "posting":
        return <Posting />;
      case "projects":
        return <Projects />;
      case "ai-matching":
        return <AIMatching />;
      case "feedback":
        return <Feedback />;
      case "insight":
        return <Insight />;
      case "profile":
        return <Profile />;
      case "search-post": // ✅ tambahin case baru
        return <SearchPostUMKM />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex">
        <SidebarUMKM activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
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
            <SidebarUMKM activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Konten */}
      <main className="flex-1 p-6 md:p-10">
        {/* Tombol Sidebar Mobile */}
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
