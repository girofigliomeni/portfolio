/**
 * @file    Social.jsx
 * @author  Girolamo Figliomeni
 * @date    2026-10-22
 * @brief   Footer with links to socials.
 */

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Social = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, link: "#", label: "GitHub" },
    { icon: FaLinkedin, link: "#", label: "LinkedIn" },
    { icon: FaInstagram, link: "#", label: "Instagram" },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];
  return (
    <footer
      id="social"
      className="bg-[#1c1c1f] border-t border-zinc-800/30
      text-white py-8 px-6 sm:px-8 font-ubuntu"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold">
              <span className="text-yellow-400">Giro</span>
            </h3>
            <p className="text-zinc-500 text-sm mt-1">Creative Web Developer</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-yellow-400
                text-sm transition-colors duration-300
                hover:scale-105 transform"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end gap-2.5"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-2.5 bg-zinc-800/50 rounded-full
                  border border-zinc-700/30 hover:border-yellow-400/50
                  hover:bg-yellow-400/10 transition-all duration-300
                  text-zinc-400 hover:text-yellow-400"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-zinc-800/50 text-center"
        >
          <p
            className="text-zinc-500 text-xs flex items-center
          justify-center gap-1 flex-wrap"
          >
            {currentYear} Figliomeni. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Social;
