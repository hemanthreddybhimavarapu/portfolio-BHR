"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Java Full Stack Developer Intern",
    organization: "TAP Academy, Bengaluru, Karnataka",
    period: "Feb 2026 – Present",
    description: "Developing full-stack web applications using Java and modern frontend frameworks, focusing on performance and scalability. Implementing RESTful APIs, managing databases, and integrating AI-based features for intelligent decision-making. Collaborating on real-time projects, applying clean coding practices, and using version control for efficient development workflows",
    tech: ["Java", "Spring Boot", "Servlets", "MySQL", "HTML", "CSS", "JavaScript", "React.js", "Git", "GitHub", "REST API"]
  },

  {
    title: "Java Technology Stack Intern",
    organization: "Infosys Springboard | 2026",
    period: "June 2026 – Aug 2026",
    description: "Completed hands-on training in the Java Technology Stack, applying OOP, database connectivity, backend development, and REST API concepts through practical assignments and projects.",
    tech: ["JAVA", "SPRING", "MYSQL", "REST APIs"]
  },
  {
    title: "Portable Rapid Microbial Detection for Dairy Safety",
    organization: "1.SMART INDIA HACKATHON 2024",
    period: "Dec2024|Bhopal ",
    description: "As a Smart India Hackathon participant, I worked on developing a portable system for rapid quality assessment of milk and dairy products. The project combined sensor-based data collection with AI-driven analysis, allowing real-time evaluation while applying both Electronics and IT-oriented development skills.",
    tech: ["Sensors", "Embedded Systems", "AI/ML Analysis", "Backend APIs", "Database", "Cloud Integration", "Web Dashboard", "Data Visualization"]
  },

  {
    title: "Participant – Future Founders Startup Innovation Program",
    organization: "sri Mayuri Builders and Developers Pvt.Ltd.(RITH)",
    period: "Sep2025 –Dec2025",
    description: "Participated in the Future Founders Program, learning startup innovation, ideation, and prototype development. Collaborated with teammates to explore new ideas, gained mentorship from industry experts, and contributed to developing innovative solutions over multiple program stages.",
  },


  // {
  //   title: "Full-Stack Developer Intern",
  //   organization: "Personal Projects",
  //   period: "Apr 2024 - May 2024",
  //   description: "Built responsive user interfaces with React and TypeScript. Integrated RESTful APIs and worked on database optimization.",
  //   tech: ["TypeScript", "Tailwind CSS", "API", "GSAP"]
  // }
];

const educations = [
  {
    title: "Bachelor of Technology",
    organization: "PSCMR COLLEGE OF ENGINEERING AND TECHNOLOGY VIJAYAWADA",
    period: "2022 - 2026",
    description: "B.Tech in Electronics and Communication Engineering with a strong focus on software development and full-stack technologies.",
  },
  {
    title: "Higher Secondary Education",
    organization: "VIJAYA JYOTHI JR.COLLEGE MANGLAGIRI",
    period: "2020-2022",
    description: "Completed higher secondary education with a focus on science and mathematics; trained as a Field Technician in computer peripherals..",
  },
  {
    title: "Secondary Education",
    organization: "VIJNANA VIHARA ENGLISH MEDUIM SCHOOL NUTAKKI",
    period: "2019-2020",
    description: "Foundational education with strong academic performance.",
  }
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className={`py-24 px-4 transition-colors duration-500 overflow-hidden ${isDark ? "bg-black" : "bg-neutral-50"}`}>
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className={isDark ? "text-white" : "text-black"}>Career </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500">Overview</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            A timeline of my professional journey and educational background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 relative">

          {/* Vertical Timeline Line (Center) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-900/30 md:-translate-x-1/2" />

          {/* Animated Glowing Progress Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-400 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />

          {/* Left Column: Technical Experience */}
          <div className="space-y-12">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl font-bold mb-12 text-center md:text-right flex items-center justify-center md:justify-end gap-3 md:pr-12 lg:pr-16 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              Technical Experience
              <Briefcase size={24} className="hidden md:block" />
            </motion.h3>

            {experiences.map((exp, idx) => (
              <TimelineCard
                key={idx}
                item={exp}
                side="left"
                isDark={isDark}
                icon={<Briefcase size={18} />}
                index={idx}
              />
            ))}
          </div>

          {/* Right Column: Academic Background */}
          <div className="space-y-12 mt-12 md:mt-0">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl font-bold mb-12 text-center md:text-left flex items-center justify-center md:justify-start gap-3 md:pl-12 lg:pl-16 ${isDark ? "text-cyan-400" : "text-cyan-600"}`}
            >
              <GraduationCap size={24} className="hidden md:block" />
              Academic Background
            </motion.h3>

            {educations.map((edu, idx) => (
              <TimelineCard
                key={idx}
                item={edu}
                side="right"
                isDark={isDark}
                icon={<GraduationCap size={18} />}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item, side, isDark, icon, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -80 : 80, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.15
      }}
      className={`relative mb-12 ml-12 md:ml-0 ${side === "left" ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}`}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className={`group p-6 rounded-2xl border transition-all duration-500 ${isDark
          ? "bg-zinc-900/30 border-white/5 hover:border-cyan-500/30 backdrop-blur-md shadow-2xl"
          : "bg-white border-neutral-200 shadow-lg hover:border-blue-400"
          }`}>
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`p-3 rounded-full flex-shrink-0 ${isDark ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-blue-50 text-blue-600 border border-blue-100"}`}
          >
            {icon}
          </motion.div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`text-[10px] md:text-xs font-semibold px-2 py-0.5 rounded-full ${isDark ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700"}`}>
                {item.period}
              </span>
            </div>
            <h4 className={`text-lg font-bold leading-tight ${isDark ? "text-white" : "text-black"}`}>{item.title}</h4>
            <p className={`text-sm mt-1 font-medium ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>{item.organization}</p>
          </div>
        </div>

        <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          {item.description}
        </p>

        {item.tech && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (index * 0.1) }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {item.tech.map((t: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.05) }}
                whileHover={{ scale: 1.15, y: -3 }}
                className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md border ${isDark ? "bg-zinc-900/50 border-white/5 text-zinc-500" : "bg-neutral-50 border-neutral-200 text-zinc-500"}`}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
