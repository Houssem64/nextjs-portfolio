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
        Passionate fullstack developer from Tunisia with proficiency in HTML, CSS and JavaScript
        and hands-on experience with MERN stack, Next.js and TypeScript. Skilled in
        troubleshooting bugs, implementing effective solutions, writing clean and readable code and
        complying to the industry&apos;s best practices . I am eager to leverage my skills and education
        to contribute to dynamic projects and teams.

      </motion.p>
    </motion.section>
  );
}
