"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [featuresHover, setFeaturesHover] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [langHover, setLangHover] = useState(false);

  const features = [
    { id: "ai-matching", label: "AI Matching Engine" },
    { id: "barter-skill", label: "Barter Skill Digital" },
    { id: "portfolio", label: "Skill Portfolio" },
    { id: "task-board", label: "Smart Task Board" },
    { id: "feedback", label: "Feedback & Rating" },
  ];

  const languages = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-blue-950 shadow-lg" : "bg-white shadow-sm"
      } ${poppins.className}`}
    >
      <div className="flex items-center justify-between h-14 md:h-20 w-full px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logos.png"
            alt="SkillLink Logo"
            width={100}
            height={40}
            className="h-8 w-auto md:h-12 object-contain"
            priority
          />
          <span
            className={`text-lg md:text-2xl font-semibold transition-colors duration-500 ${
              scrolled ? "text-white" : "text-[#0F2C59]"
            }`}
          >
            SkillLink
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium relative">
          {/* Fitur Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setFeaturesOpen(true);
              setFeaturesHover(true);
            }}
            onMouseLeave={() => {
              setFeaturesOpen(false);
              setFeaturesHover(false);
            }}
          >
            <button
              className={`flex items-center gap-1 transition-colors duration-500 ${
                scrolled
                  ? "text-white hover:text-cyan-400"
                  : "text-gray-700 hover:text-blue-800"
              }`}
            >
              Fitur
              <motion.span
                animate={{ rotate: featuresHover ? -180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence>
              {featuresOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full mt-2 w-52 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {features.map((item) => (
                    <a
                      key={item.id}
                      href="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tentang */}
          <a
            href="/login"
            className={`transition-colors duration-500 ${
              scrolled
                ? "text-white hover:text-cyan-400"
                : "text-gray-700 hover:text-blue-800"
            }`}
          >
            Tentang
          </a>

          {/* Language Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLangHover(true)}
            onMouseLeave={() => setLangHover(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors duration-500 ${
                scrolled
                  ? "text-white hover:text-cyan-400"
                  : "text-gray-700 hover:text-blue-800"
              }`}
            >
              Bahasa
              <motion.span
                animate={{ rotate: langHover ? -180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence>
              {langHover && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href="/login"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
                    >
                      {lang.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mulai */}
          <a
            href="/login"
            className="px-6 py-2 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-900 transition"
          >
            Mulai
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${
            scrolled ? "text-white hover:bg-blue-800/30" : "text-blue-800 hover:bg-blue-50"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden border-t shadow-sm ${
              scrolled ? "bg-blue-950" : "bg-white"
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav className="flex flex-col p-4 space-y-4 font-medium">
              {/* Fitur Expandable */}
              <div>
                <button
                  className={`flex justify-between w-full items-center px-2 py-2 transition-colors duration-500 ${
                    scrolled
                      ? "text-white hover:text-cyan-400"
                      : "text-gray-700 hover:text-blue-800"
                  }`}
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                >
                  Fitur <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {featuresOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 flex flex-col gap-1"
                    >
                      {features.map((item) => (
                        <a
                          key={item.id}
                          href="/login"
                          className="text-gray-700 hover:text-blue-800 transition px-2 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tentang */}
              <a
                href="/login"
                className={`transition-colors duration-500 ${
                  scrolled
                    ? "text-white hover:text-cyan-400"
                    : "text-gray-700 hover:text-blue-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Tentang
              </a>

              {/* Bahasa Expandable */}
              <div>
                <button
                  className={`flex justify-between w-full items-center px-2 py-2 transition-colors duration-500 ${
                    scrolled
                      ? "text-white hover:text-cyan-400"
                      : "text-gray-700 hover:text-blue-800"
                  }`}
                  onClick={() => setLangOpen(!langOpen)}
                >
                  Bahasa <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 flex flex-col gap-1"
                    >
                      {languages.map((lang) => (
                        <a
                          key={lang.code}
                          href="/login"
                          className="text-gray-700 hover:text-blue-800 transition px-2 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {lang.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mulai */}
              <a
                href="/login"
                className="px-6 py-2 bg-blue-800 text-white rounded-lg text-center shadow hover:bg-blue-900 transition"
                onClick={() => setIsOpen(false)}
              >
                Mulai
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
