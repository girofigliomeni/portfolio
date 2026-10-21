import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="bg-zinc-900 text-white min-h-screen relative
    overflow-x-hidden selection:bg-yellow-400 selection:text-zinc-950
    font-unbuntu"
    >
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border 
        border-yellow-400/80 pointer-events-none z-50 flex
        items-center justify-center"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className="w-2 h-2 rounded-full bg-yellow-400
        shadow-[0_0_8px_2px_rgba(255,255,0,0.5)]"
        />
      </motion.div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
