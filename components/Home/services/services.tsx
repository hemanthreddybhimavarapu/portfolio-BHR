"use client";
import MagicBento from "@/components/ui/MagicBento"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";


const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section id="services"
      className={`py-20 px-4 ${isDark ? "bg-black " : "bg-white"
        }`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className={isDark ? "text-white" : "text-black"}>My </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Achievements</span>
        </h1>
        <p className={`text-lg transition-colors duration-500 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          Some of my milestones
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
      >
        <MagicBento />
      </motion.div>
    </section>
  );
};

export default Services;
