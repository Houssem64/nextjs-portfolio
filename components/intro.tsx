"use client";
import React from "react";
import Image from "next/image";
import mypic from "@/public/mypic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Intro() {
  return (
    <section id="home" className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", delay: 0.2}}
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
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", delay: 0.2}}
      >
        <span className="font-bold">Hi, I&apos;m Houssem Mehouachi</span>, a
        passionate web developer dedicated to turning digital dreams into
        reality. Dive into my portfolio and let&apos;s collaborate to bring your
        vision to vibrant life online!
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4  px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", delay: 0.2}}

      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {" "}
          <Link
            href="#contact"
            className=" bg-gray-900 group  text-white outline-none hover:ring-1  hover:ring-[#FFFFFF] hover:outline-[#FFFFFF] hover:bg-gray-950  px-7 py-3 flex items-center gap-2 rounded-full "
          >
            Contact&nbsp;Me <FaArrowRightLong className="opacity-70 group-hover:translate-x-1 transition group-hover:text-[#FFFFFF] font-bold" />{" "}
          </Link>
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white outline-none group hover:ring-1   hover:ring-[#FFFFFF] hover:outline-[#FFFFFF] px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer " href="/MehouachiHoussem.pdf" download="MehouachiHoussem.pdf" target="_blank" rel="noreferrer"
        >
          Download&nbsp;CV <HiDownload className="group-hover:scale-125 transition" />
        </motion.a>
        <a
         
          className="bg-white outline-none group hover:ring-1 hover:scale-110  hover:ring-[#FFFFFF] hover:outline-[#FFFFFF] hover:text-gray-950 text-gray-700 p-4 flex items-center gap-2 rounded-full "
        href="https://www.linkedin.com/in/houssem-mehouachi-7681761bb/" target="_blank" rel="noreferrer"
        >
          {" "}
          <BsLinkedin className="group-hover:scale-110" />
        </a>
        <a
          
          className="bg-white outline-none group hover:ring-1 hover:scale-110  hover:ring-[#FFFFFF] hover:outline-[#FFFFFF] hover:text-gray-950 text-gray-700 p-4 flex items-center gap-2 rounded-full "
        href="https://github.com/Houssem64" target="_blank" rel="noreferrer"
        >
          <FaGithub className="group-hover:scale-125"  />
        </a>
      </motion.div>
    </section>
  );
}
