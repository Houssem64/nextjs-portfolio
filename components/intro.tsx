"use client";
import React from "react";
import Image from "next/image";
import mypic from "@/public/mypic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ typee: "tween", duration: 0.5 }}
          >
            <Image
              src={mypic}
              alt="My Picture"
              quality="95"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover border-opacity-40"
            />
          </motion.div>
        </div>
      </div>
      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" 
      initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hi, I&apos;m Houssem Mehouachi</span>, a web
        developer with experience in React, TypeScript, and Next.js.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" initial={{opacity: 0 , y: 100}} animate={{opacity: 1 , y: 0}} >
        <Link href="#contact" className=" bg-gray-900 text-white  px-7 py-3 flex items-center gap-2 rounded-full ">Contact Me <BsArrowRight /> </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full ">Download CV <HiDownload /></a>
        <a className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full "> <BsLinkedin /></a>
        <a className="bg-white text-gray-700 p-4 text-[1rem] flex items-center gap-2 rounded-full "><FaGithub /></a>
      </motion.div>
    </section>
  );
}
