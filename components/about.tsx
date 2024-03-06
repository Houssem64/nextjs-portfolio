"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3"></p>
      <motion.p
        whileHover={{ scale: 1.2 }} // Zooms the text to 1.2x when hovered
        style={{ cursor: "pointer" }} // Changes cursor to pointer on hover>
      >
        As a web developer, I excel in soft skills like communication,
        problem-solving, and autonomy. My expertise lies in HTML, CSS,
        JavaScript, Next.js, and React, complemented by hard skills including
        Bash Scripting, Oracle databases, and hardware troubleshooting. I hold a
        BTS in Web Development 
        
      </motion.p>
    </motion.section>
  );
}
