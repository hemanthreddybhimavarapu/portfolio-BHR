"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import {
  Github,
  Globe,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ================= TYPES ================= */

type ProjectType = {
  id: number;
  title: string;
  tech: string[];
  description: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
};

/* ================= DATA ================= */

const projects: ProjectType[] = [

  {
    id: (7),
    title: "CodeArena — Coding Practice & Assessment Platform",
    tech: ["Java 17", "Spring Boot", "React.js", "PostgreSQL", "Docker", "JWT", "Monaco Editor"],
    description:
      "CodeArena is a full-stack coding practice platform that allows users to browse programming problems, write and submit code through an online Monaco Editor, and receive automated results based on multiple test cases. It uses Docker-based sandboxed execution to safely run code with time and memory limits, along with JWT authentication, role-based access, problem management, progress tracking, submission history, and leaderboards. The platform supports Java, Python, C++, and JavaScript.",
    images: ["/project-7.jpeg"],
    liveUrl: "https://code-arena-kohl-one.vercel.app/",
    githubUrl: "https://github.com/hemanthreddybhimavarapu/code-arena",
  },
  {
    id: (2),
    title: "WanderAI — AI-Powered Travel Planning Platform",
    tech: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "AI"],
    description:
      "WanderAI is an AI-powered travel planning platform that helps users create personalized travel itineraries based on their destination, budget, interests, and travel preferences. It provides interactive destination discovery, attraction exploration, personalized travel recommendations, and an intuitive responsive interface designed to make trip planning simple and engaging.",
    images: ["/project-2.jpeg"],
    images: ["/project-2(1).jpeg"],
    liveUrl: "https://wander-ai-sigma.vercel.app/",
    githubUrl: "https://github.com/hemanthreddybhimavarapu/Wander-AI",
  },
  {
    id: 1,
    title: "Real-Time Milk Microbial Detection",
    tech: ["NodeMCU", "Conductivity Sensor", "Temperature Sensor", "ThingSpeak", "Arduino IDE", "Embedded C/C++", "Real-Time Monitoring", "Data Visualization"],
    description:
      "Developed a cost-effective, portable IoT system to detect microbial contamination in milk in real-time using conductivity analysis with temperature compensation. Integrated NodeMCU hardware with conductivity and temperature sensors, sending data to ThingSpeak for remote monitoring and trend analysis. Validated performance through live testing at Smart India Hackathon 2024, achieving approximately 75% detection accuracy.",
    images: ["/project-1.jpeg"],
    liveUrl: "https://drive.google.com/drive/folders/1pkBOju9VTTXXY9awmIcMzL0u0ws0B962?usp=drive_link",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Smart Health Monitoring System with IoT, AI & Cloud Integration",
    tech: ["ESP32-S3", "IoT", "Sensor Integration",],
    description:
      "Developed an advanced IoT-based smart health monitoring system using ESP32-S3 and multiple biomedical sensors to track patient vitals in real time. The system integrates ECG, SpO₂, temperature, motion, and environmental sensors for continuous data collection and processing. Edge computing techniques were implemented for low-latency signal processing and accurate analysis. ",
    images: ["/project 5.jpeg"],
    liveUrl: "https://weather-delta-steel.vercel.app/",
    githubUrl: "https://github.com/hemanthreddybhimavarapu/Smart-Health-Monitoring-System",
  },
  {
    id: 4,
    title: "Responsive HTML & CSS Blog Template",
    tech: [" HTML5", "CSS3", "Responsive Design", "Semantic Tags"],
    description: "Designed and developed a responsive blog template using HTML5 and CSS3. The template features semantic HTML tags, styled lists, headings, images, and a clean layout optimized for readability across devices.",
    images: ["/project-4.jpeg"],
    liveUrl: "https://weather-delta-steel.vercel.app/",
    githubUrl: "https://github.com/paulsunny90/weather-app",
  },
];

/* ================= CARD COMPONENT ================= */

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const total = project.images.length;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`w-full h-full flex flex-col rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-500 overflow-hidden ${isDark
        ? "border-white/5 bg-zinc-900/40 hover:border-cyan-500/30"
        : "border-zinc-200 bg-white hover:border-blue-500/30"
        }`}
    >
      {/* Image Carousel */}
      <div className="relative group/img">
        <div className="relative h-56 w-full overflow-hidden">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full"
          >
            <Image
              src={project.images[index]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
        </div>

        {total > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + total) % total); }}
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-cyan-500 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % total); }}
              className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-cyan-500 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Image Indicators */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${i === index ? "w-4 bg-cyan-400" : "w-1 bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-black"}`}>
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${isDark ? "hover:bg-zinc-800 text-zinc-400 hover:text-white" : "hover:bg-zinc-100 text-zinc-600 hover:text-black"}`}
            >
              <Github size={18} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${isDark ? "hover:bg-zinc-800 text-zinc-400 hover:text-white" : "hover:bg-zinc-100 text-zinc-600 hover:text-black"}`}
            >
              <Globe size={18} />
            </a>
          </div>
        </div>

        <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border transition-colors ${isDark
                ? "border-white/5 bg-black/50 text-cyan-400"
                : "border-zinc-200 bg-zinc-50 text-blue-600"
                }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

/* ================= PROJECT SECTION ================= */

const Project = () => {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const total = projects.length;

  // Responsive items count
  const [visibleItems, setVisibleItems] = useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1 >= total - (visibleItems - 1) ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? Math.max(0, total - visibleItems) : prev - 1));
  };

  return (
    <section id="project" className={`px-4 py-24 overflow-hidden transition-colors duration-500 ${isDark ? "bg-black" : "bg-neutral-50"}`}>
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className={isDark ? "text-white" : "text-black"}>Featured </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            A collection of web applications built with modern technologies and a focus on performance and UX.
          </p>
        </motion.header>

        {/* Carousel Container */}
        <div className="relative group px-4 md:px-0">
          {/* Navigation Buttons - More visible and styled */}
          {total > visibleItems && (
            <>
              <button
                onClick={prev}
                className={`absolute -left-2 md:-left-6 top-1/2 z-30 -translate-y-1/2 rounded-full p-4 transition-all duration-300 shadow-2xl ${isDark
                  ? "bg-zinc-900/90 text-white border border-white/10 hover:bg-zinc-800 hover:border-cyan-500/50"
                  : "bg-white/90 text-black border border-zinc-200 hover:bg-neutral-100 hover:border-blue-500/50"
                  }`}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={next}
                className={`absolute -right-2 md:-right-6 top-1/2 z-30 -translate-y-1/2 rounded-full p-4 transition-all duration-300 shadow-2xl ${isDark
                  ? "bg-zinc-900/90 text-white border border-white/10 hover:bg-zinc-800 hover:border-cyan-500/50"
                  : "bg-white/90 text-black border border-zinc-200 hover:bg-neutral-100 hover:border-blue-500/50"
                  }`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * (100 / visibleItems)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: total - (visibleItems - 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 transition-all duration-300 rounded-full ${current === i
                  ? "w-8 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
