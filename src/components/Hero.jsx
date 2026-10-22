/**
 * @file    Hero.jsx
 * @author  Girolamo Figliomeni
 * @date    2026-10-22
 * @brief   Home page of the React application.
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";

const words = [
  "Web Developer",
  "Software Engineer",
  "System Designer",
  "Digital Creator",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[index];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 120);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <section
      id="home"
      className="lg:min-h-screen text-white flex items-center 
      justify-center relative overflow-hidden pt-32
      lg:pt-28 pb-28 sm:pb-16 px-4 sm:px-8 font-ubuntu"
    >
      <div
        className="max-w-6xl mx-auto w-full items-center grid grid-cols-1 
        lg:grid-cols-12 gap-8 md:gap-12 z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center items-center
          order-1 lg:order-0"
        >
          <div
            className="relative w-64 sm:w-72 h-80 sm:h-96 flex
            items-center justify-center my-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute inset-0 rounded-2xl shadow-xl"
            >
              <motion.img
                src={hero}
                alt="Hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
        <div
          className="lg:col-span-7 flex flex-col justify-center items-center
          lg:items-start lg:text-left order-2 lg:order-0"
        >
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-300 text-sm sm:text-base
            lg:text-lg font-medium mb-1 sm:mb-2 tracking-wide"
          >
            Girolamo{" "}
            <span
              className="text-yellow-400 
            font-bold"
            >
              Figliomeni
            </span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold 
            tracking-tight my-2 sm:my-3"
          >
            <div>Computer Science Graduate &</div>
            <div
              className="inline-flex items-center 
            min-h-[1.2em] relative justify-center
            lg:justify-start"
            >
              <span
                className="text-yellow-400 font-ubuntu
                font-medium text-3xl lg:text-5xl xl:text-6xl"
              >
                {displayedText}
              </span>
              <span
                className="w-1 h-6 sm:h-8 md:h-10 lg:h-12
              bg-yellow-400 ml-1 sm:ml-2 inline-block animate-pulse"
              ></span>
            </div>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-lg max-w-xl font-light
            font-ubuntu leading-relaxed my-2 sm:my-4 px-2 sm:px-0"
          >
            Honours Bachelor of Science in Computer Science from Lakehead
            University and experienced in developing web applications using
            modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4 mt-5
          sm:mt-2 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="portfolio-button bg-yellow-400 text-zinc-950 hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="portfolio-button border-yellow-400/80 text-yellow-400 hover:scale-105"
            >
              My Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
