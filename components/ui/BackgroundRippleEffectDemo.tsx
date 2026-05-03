"use client";

import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Navbar from "../Home/NavBar/Navbar";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";

export default function BackgroundRippleEffectDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div id="about" className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 flex items-center justify-center ${isDark ? "bg-black" : "bg-white"}`}>
      <Navbar />

      {/* Background Effect */}
      <BackgroundRippleEffect isDark={isDark} />

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
        >
          {/* Animated rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className={`absolute -inset-4 rounded-3xl border-2 border-dashed transition-colors duration-500 ${isDark ? "border-cyan-500/30" : "border-blue-500/20"}`}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className={`absolute -inset-8 rounded-full border border-dotted transition-colors duration-500 ${isDark ? "border-blue-500/20" : "border-cyan-500/10"}`}
          />

          <div className={`absolute inset-0 rounded-3xl blur-3xl transition-colors duration-500 ${isDark ? "bg-cyan-500/20" : "bg-blue-400/10"}`} />

          <div className={`relative h-full w-full rounded-3xl border-2 p-2 transition-colors duration-500 overflow-hidden ${isDark ? "border-white/10 bg-zinc-900/50" : "border-black/5 bg-white"}`}>
            <Image
              src="/profile.jpeg.jpeg"
              alt="profile.jpeg.jpeg"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-50" />
        </motion.div>

        {/* Text Section */}
        <div className="text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${isDark ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "bg-blue-500/10 text-blue-600 border border-blue-500/20"}`}>
              Available for Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className={`text-5xl font-bold md:text-6xl lg:text-7xl mb-2 ${isDark ? "text-neutral-100" : "text-black"}`}
          >
            Hemanth Reddy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Bhimavarapu</span>
          </motion.h2>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-xl md:text-2xl font-semibold tracking-wide mb-3 ${isDark ? "text-cyan-400" : "text-blue-600"}`}
          >
            FULL STACK DEVELOPER
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
          >
            I am a motivated fresher passionate about building modern full-stack web applications.
            With hands-on experience across the <span className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>FULL Stack</span>,
            II enjoy learning new technologies and solving real-world problems through clean code. transform complex problems into elegant, user-centric digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all active:scale-95"
            >
              Get in Touch
            </a>
            <a
              href="#project"
              className={`px-8 py-4 rounded-xl border font-bold transition-all active:scale-95 ${isDark ? "border-white/10 hover:bg-white/5 text-white" : "border-black/10 hover:bg-black/5 text-black"}`}
            >
              Project Showcase
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
