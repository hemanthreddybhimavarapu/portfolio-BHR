"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Download,
  Send,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // <-- REPLACE THESE WITH YOUR EMAILJS KEYS -->
  const SERVICE_ID = "service_ixxompc";
  const TEMPLATE_ID = "template_2swh169";
  const PUBLIC_KEY = "5jG2PtP3DLUI4qa5K";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        setStatus("❌ Failed to send message. Try again.");
        setLoading(false);
      });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "public/B_HEMANTH_REDDY_RESUME.pdf";
    link.download = "public/B_HEMANTH_REDDY_RESUME.pdf";
    link.click();
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-4 ${isDark
        ? "bg-gradient-to-b from-black via-neutral-950 to-black"
        : "bg-white"
        }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 transition-colors duration-500">
            <span className={isDark ? "text-white" : "text-black"}>Let&apos;s </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
          </h1>
          <p className={`text-lg transition-colors duration-500 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            Let’s build something great together.
          </p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <a
            href="mailto:iamhemanth9848@gmail.com"
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-colors ${isDark
              ? "bg-neutral-900 border-neutral-800 text-zinc-300 hover:text-blue-400"
              : "bg-neutral-100 border-neutral-200 text-zinc-700 hover:text-blue-600"
              }`}
          >
            <Mail className="w-5 h-5" />
            iamhemanth9848@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`rounded-3xl border p-8 md:p-12 transition-colors duration-500 ${isDark ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-white shadow-lg"
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                placeholder="Your Name"
                required
                className={`w-full px-4 py-3 rounded-xl border focus:border-blue-500 focus:outline-none transition-colors ${isDark ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-neutral-200 text-black"
                  }`}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className={`w-full px-4 py-3 rounded-xl border focus:border-blue-500 focus:outline-none transition-colors ${isDark ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-neutral-200 text-black"
                  }`}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                rows={5}
                placeholder="Your Message..."
                required
                className={`w-full px-4 py-3 rounded-xl border resize-none focus:border-blue-500 focus:outline-none transition-colors ${isDark ? "bg-neutral-950 border-neutral-800 text-white" : "bg-white border-neutral-200 text-black"
                  }`}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                bg-blue-600 border border-blue-500 text-white
                hover:bg-blue-700 transition active:scale-95 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className={`text-sm text-center animate-pulse ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{status}</p>
              )}
            </form>

            <div className="space-y-8">
              <button
                onClick={handleDownloadResume}
                className={`w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl border transition active:scale-95 ${isDark
                  ? "bg-neutral-800 border-neutral-700 text-zinc-300 hover:bg-neutral-700 hover:text-white"
                  : "bg-neutral-200 border-neutral-300 text-zinc-700 hover:bg-neutral-300 hover:text-black"
                  }`}
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </button>

              <a
                href="https://www.linkedin.com/in/hemanthreddybhimavarapu/"
                target="_blank"
                className={`block text-center px-6 py-4 rounded-xl border transition ${isDark
                  ? "bg-neutral-900 border-neutral-700 text-zinc-300 hover:bg-neutral-800 hover:text-white"
                  : "bg-neutral-100 border-neutral-200 text-zinc-700 hover:bg-neutral-200 hover:text-black"
                  }`}
              >
                Connect on LinkedIn
              </a>

              <div className="flex gap-3 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://github.com/hemanthreddybhimavarapu"
                  target="_blank"
                  className={`p-3 rounded-xl border transition ${isDark
                    ? "border-neutral-800 hover:bg-neutral-800 text-zinc-400 hover:text-white"
                    : "border-neutral-200 hover:bg-neutral-100 text-zinc-600 hover:text-black"
                    }`}
                >
                  <Github />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://www.linkedin.com/in/hemanthreddybhimavarapu/"
                  target="_blank"
                  className={`p-3 rounded-xl border transition ${isDark
                    ? "border-neutral-800 hover:bg-neutral-800 text-zinc-400 hover:text-white"
                    : "border-neutral-200 hover:bg-neutral-100 text-zinc-600 hover:text-black"
                    }`}
                >
                  <Linkedin />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
