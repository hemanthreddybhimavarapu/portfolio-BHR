"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

const navItems = [

  { name: "About", href: "#about" },
  { name: "Skills", href: "#Skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#project" },
  { name: "Achievments", href: "#achievement" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 dark:bg-black/60 bg-white/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="text-xl font-bold tracking-wide dark:text-white text-black">
          HEMANTH REDDY<span className="text-blue-500">BHIMAVARAPU</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item, idx) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.5 }}
              className="group relative"
            >
              <Link
                href={item.href}
                className="text-sm font-medium dark:text-neutral-300 text-neutral-600 transition dark:hover:text-white hover:text-black"
              >
                {item.name}
              </Link>

              {/* Underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 blur-md opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
            </motion.li>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full dark:bg-neutral-800 bg-neutral-100 dark:text-yellow-400 text-neutral-600 hover:scale-110 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </ul>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-neutral-800 bg-neutral-100 dark:text-yellow-400 text-neutral-600"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="dark:text-neutral-300 text-neutral-600 dark:hover:text-white hover:text-black transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden dark:bg-black/90 bg-white/90 backdrop-blur-xl border-t dark:border-white/10 border-black/10"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium dark:text-neutral-300 text-neutral-600 transition dark:hover:text-white hover:text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
