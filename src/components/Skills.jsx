/**
 * @file    Skills.jsx
 * @author  Girolamo Figliomeni
 * @date    2026-10-22
 * @brief   Skills page of the React application.
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaCode,
  FaCog,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      name: "Frontend",
      icon: FaCode,
      skills: [
        { name: "JavaScipt", icon: FaJs, color: "#F7DF1F" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Flutter", icon: SiFlutter, color: "#08589C" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    backend: {
      name: "Backend",
      icon: FaCog,
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Supabase", icon: SiSupabase, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      ],
    },
    tools: {
      name: "Tools",
      icon: FaCode,
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "WordPress", icon: FaWordpress, color: "#21759B" },
      ],
    },
  };
  const filteredSkills = skillCategories[activeCategory]?.skills || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };
  const itemVarients = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };
  return (
    <section
      id="skills"
      ref={ref}
      className="lg:min-h-screen text-white py-24 lg:py-28 px-4
        sm:px-6 font-ubuntu scroll-m-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 font-semibold text-xs sm:text-sm
            tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3"
          >
            My Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Skills &{" "}
            <span
              className="block sm:inline pb-1 leading-normal bg-linear-to-r from-yellow-400
            to-yellow-500 bg-clip-text text-transparent"
            >
              Technologies
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mt-4
            rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-12 mb-10 sm:mb-12"
        >
          {Object.entries(skillCategories).map(([index, category]) => {
            return (
              <button
                key={index}
                type="button"
                aria-pressed={activeCategory === index}
                onClick={() => setActiveCategory(index)}
                className={`portfolio-button hover:scale-105 ${
                  activeCategory === index
                    ? `bg-yellow-400 text-zinc-950 shadow-lg 
                          shadow-yellow-400/40`
                    : `bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 
                          hover:text-white border-zinc-700/20`
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVarients}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group reletive bg-zinc-800/30 backdrop-blur-sm
                rounded-2xl p-6 sm:p-7 lg:p-8 min-h-41.25 sm:min-h-47.5
                lg:min-h-50 flex flex-col items-center justify-center gap-4
                border border-zinc-700/30 hover:boarder-yellow-400
                shadow-lg hover:shadow-yellow-400/10 transition-all 
                duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition-opacity duraction-500"
                />
                <div
                  className="text-5xl sm:text-6xl transition-transform
                  duration-300 group-hover:scale-110 relative z-10"
                  style={{ color: skill.color }}
                >
                  <Icon />
                </div>
                <p
                  className="text-zinc-300 text-sm sm:text-base
                  font-medium text-center relative z-10 group-hover:text-white
                  transition-colors duration-300"
                >
                  {skill.name}
                </p>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-0.5 bg-yellow-400 group-hover:w-2/3 transition-all
                  duration-300 rounded-full"
                ></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
