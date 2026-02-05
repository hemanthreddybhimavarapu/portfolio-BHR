"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";

const getImageName = (src: string) => {
  const name = src.split("/").pop()?.split(".")[0] ?? "";
  return name
    .replace(/-original|-plain|-logo/g, "")
    .replace(/_/g, " ")
    .toUpperCase();
};

export const HoverEffect = ({
  items = [],
  className,
}: {
  items?: {
    title: string;
    image?: string;
    image1?: string;
    image2?: string;
    image3?: string;
    image4?: string;
    image5?: string;
    image6?: string;
    description: string;
    links?: string[]; // Array of links for each image
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!items.length) return null;

  return (
    <div
      className={cn(
        // Responsive grid
        "grid gap-4 py-10 px-2",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => {
        const images = [
          item.image,
          item.image1,
          item.image2,
          item.image3,
          item.image4,
          item.image5,
          item.image6,
        ].filter(Boolean) as string[];

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group block p-2 cursor-default"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={cn(
                    "absolute inset-0 rounded-3xl",
                    isDark ? "bg-slate-800/80" : "bg-neutral-200"
                  )}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                />
              )}
            </AnimatePresence>

            <Card isDark={isDark}>
              {images.length > 0 && (
  <div
    className="
      flex flex-wrap justify-center mb-4 gap-3 sm:gap-4
    "
  >
    {images.map((img, i) => {
      const Content = (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className={cn(
            "flex flex-col items-center text-[10px] sm:text-[11px]",
            isDark ? "text-zinc-300" : "text-zinc-700"
          )}
        >
          <div
            className={cn(
              "p-2 rounded-xl transition-transform duration-300",
              isDark ? "bg-zinc-900" : "bg-zinc-100"
            )}
          >
            <Image
              src={img}
              alt={getImageName(img)}
              width={32}
              height={32}
              className="object-contain sm:h-10 sm:w-10"
            />
          </div>
          <span className="mt-1 text-center">
            {getImageName(img)}
          </span>
        </motion.div>
      );

      if (item.links && item.links[i]) {
        return (
          <a 
            key={i} 
            href={item.links[i]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            {Content}
          </a>
        );
      }
      return Content;
    })}
  </div>
)}


              <CardTitle isDark={isDark}>{item.title}</CardTitle>
              <CardDescription isDark={isDark}>{item.description}</CardDescription>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isDark,
}: {
  className?: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 rounded-2xl p-3 sm:p-4 h-full transition-all duration-500",
        isDark ? "bg-black border-white/10 group-hover:border-zinc-600" : "bg-white border-zinc-200 group-hover:border-zinc-400",
        "border",
        className
      )}
    >
      <div id="Skills" className="relative z-50 p-2 sm:p-4">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
  isDark,
}: {
  className?: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 text-center font-bold tracking-wide text-base sm:text-lg transition-colors duration-500",
        isDark ? "text-zinc-100" : "text-zinc-900",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
  isDark,
}: {
  className?: string;
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-center text-xs sm:text-sm leading-relaxed transition-colors duration-500",
        isDark ? "text-zinc-400" : "text-zinc-600",
        className
      )}
    >
      {children}
    </p>
  );
};
