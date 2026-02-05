"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

export function CardHoverEffectDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`
        w-full transition-colors duration-500
        ${isDark ? "bg-black text-white" : "bg-white text-black"}
        px-4 sm:px-6 md:px-10
        py-12 sm:py-16 md:py-20
      `}
    >
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <motion.h1
          id="Skills"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          <span className={isDark ? "text-white" : "text-black"}>Technical </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Skills</span>
        </motion.h1>

        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HoverEffect items={projects} />
        </motion.div>
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "Programming Languages",
    image: "https://nixrajput.com/skills/javascript.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Core programming languages including JavaScript, TypeScript essential for web and software development.",
    links: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://www.typescriptlang.org/"],
  },
  {
    title: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    image2: "https://nixrajput.com/skills/html.svg",
    image3: "https://nixrajput.com/skills/css.svg",
    image4: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    description:
      "Technologies for building interactive and responsive user interfaces, including React, Next.js, HTML, CSS, Tailwind CSS, and Redux.",
    links: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "https://tailwindcss.com/",
    ],
  },
  {
    title: "Backend Development",
    image: "https://nixrajput.com/skills/nodejs.svg",
    image1: "https://nixrajput.com/skills/express.svg",
    description:
      "Server-side development with Node.js and Express, using Postman for API testing and development.",
    links: ["https://nodejs.org/", "https://expressjs.com/",],
  },
  {
    title: "Database Management",
    image: "https://nixrajput.com/skills/mongodb.svg",
    image2: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "Database solutions like MongoDB, and MySQL for storing and managing application data efficiently.",
    links: ["https://www.mongodb.com/", "https://www.mysql.com/"],
  },
  {
    title: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description:
      "Version control tools Git and GitHub for managing code changes, collaboration, and project history.",
    links: ["https://git-scm.com/", "https://github.com/"],
  },
  {
    title: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    image1: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    description:
      "Design and prototyping tools Figma and Photoshop for creating user interfaces, graphics, and visual assets.",
    links: ["https://www.figma.com/", "https://www.adobe.com/products/photoshop.html"],
  },
];
