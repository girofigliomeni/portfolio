/**
 * @file    Projects.jsx
 * @author  Girolamo Figliomeni
 * @date    2026-10-22
 * @brief   Projects page of the React application.
 */

import { useEffect, useRef, useState } from "react";
import soon from "../assets/soon.png";
import { motion, scale, useInView } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaExternalLinkSquareAlt,
  FaGithub,
  FaGithubAlt,
  FaLink,
} from "react-icons/fa";

const PROJECTS = [
  {
    id: 1,
    title: "Inventory Managment System",
    desc: "Built and deployed a full-stack inventory managment system using Next.js, Redus, Node, and AWS.",
    image: soon,
    technologies: ["Next.js", "Redux", "Node", "AWS"],
  },
  {
    id: 2,
    title: "Learning Managment Platform",
    desc: "Built an enterprise level full-stack learning managment platform with Clerk.",
    image: soon,
    technologies: [
      "AWS",
      "Docker",
      "Next.js",
      "Clerk",
      "DynamoDB",
      "ECR",
      "S3",
      "Shadcn",
      "Node",
    ],
  },
  {
    id: 3,
    title: "Web3 Social Media App",
    desc: "Built a decentralized Web3 React social media app.",
    image: soon,
    technologies: ["React", "Chakra UI", "Lens"],
  },
  {
    id: 4,
    title: "Coming Soon...",
    desc: "More projects are in the works.",
    image: soon,
    technologies: [""],
  },
];

const getItemsPerPages = () => {
  if (typeof window === "undefined") return 3;
  const width = window.innerWidth;
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const getCardWidth = (itemsPerPage) => {
  if (itemsPerPage === 1) return "100%";
  if (itemsPerPage === 2) return "calc(50% - 12px)";
  return "calc(33.333% - 16px)";
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPages);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);
  const maxIndex = Math.max(0, PROJECTS.length - itemsPerPage);
  const cardWidth = getCardWidth(itemsPerPage);
  const translatePercentage = currentIndex * (100 / itemsPerPage);
  const translateGap = currentIndex * (24 / itemsPerPage);
  const currentPage = currentIndex === maxIndex
    ? totalPages - 1
    : Math.floor(currentIndex / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPages());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePointerDown = (e) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setDragOffset(startX - e.clientX);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset > 50) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (dragOffset < -50) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
    setDragOffset(0);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const goToPage = (pageIndex) => {
    setCurrentIndex(Math.min(pageIndex * itemsPerPage, maxIndex));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.3 + index * 0.08,
      },
    }),
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="lg:min-h-screen bg-zinc-900 text-white py-24 sm:py-28
      lg:py-16 px-4 sm:px-6 font-ubuntu scroll-m-16 relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2
        w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-80 pointer-events-none"
      ></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-yellow-400 font-semibold text-xs
            sm:text-sm tracking-[0.2em] sm:tracking-[0.3em]
            uppercase mb-2"
          >
            My Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold"
          >
            Featured{" "}
            <span
              className="bg-linear-to-r from-yellow-400 to-yellow-500
            bg-clip-text text-transparent"
            >
              Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-12 sm:w-16 lg:w-20 h-1 bg-yellow-400
            mx-auto mt-3 rounded-full"
          />
        </motion.div>
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing
          touch-pan-y select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onLostPointerCapture={handlePointerCancel}
        >
          <motion.div
            className="flex gap-6"
            style={{
              transform: `translateX(calc(-${translatePercentage}% - ${translateGap}px - ${dragOffset}px))`,
              transition: isDragging ? "none" : "transform 0.5s ease-in-out",
            }}
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="shrink-0 group"
                style={{ width: cardWidth }}
              >
                <div
                  className="bg-zinc-800/30 backdrop-blur-sm rounded-xl
                  sm:rounded-2xl overflow-hidden border border-zinc-700/30
                  hover:border-yellow-400/50 shadow-lg hover:shadow-lg
                  hover:shadow-yellow-400/10 transition-all duration-300
                  h-full"
                >
                  <div className="relative overflow-hidden h-40 sm:h-40 lg:h-44">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105
                      transition-transform duration-400 pointer-events-none"
                      draggable="false"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t
                    from-zinc-950 via-transparent to-transparent
                    opacity-60"
                    ></div>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/80 backdrop-blur-sm
                        rounded-full hover:bg-yellow-400
                        hover:text-zinc-950 transition-all duration-300"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-900/80 backdrop-blur-sm
                        rounded-full hover:bg-yellow-400
                        hover:text-zinc-950 transition-all duration-300"
                        onPointerDown={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3
                      className="text-base sm:text-lg font-bold mb-2
                    text-white group-hover:text-yellow-400 transition-colors
                    duration-300"
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-zinc-400 text-xs sm:text-sm mb-4
                    leading-relaxed"
                    >
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-2.5 py-1
                        bg-zinc-800/50 text-zinc-300
                        text-[10px] sm:text-xs rounded-full
                        border border-zinc-700/30 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div
          className="flex justify-center items-center gap-2 mt-4
        sm:mt-5"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300
                    ${
                      currentPage === index
                        ? "w-8 bg-yellow-400"
                        : "w-2 bg-zinc-600 hover:bg-zinc-400"
                    }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
