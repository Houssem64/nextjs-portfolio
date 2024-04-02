import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pic1 from "@/public/FlexFitGym.png";
import pic2 from "@/public/Houssem-Mehouachi.png";
import pic3 from "../public/blog.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "web developement intern",
    location: "DOTCOM",
    description:
      "1-month internship as a web developer. Involved front-end development using HTML, CSS, and JavaScript, and frameworks like React.js.",
    icon: React.createElement(CgWorkAlt),
    date: " 2023",
  },
  {
    title: "BTS Web development",
    location: "IMSET",
    description:
      "2 years of study focused on web development. I learned front-end and back-end development, and worked on several projects using modern technologies like React.js, Next.js, and Node.js.",
    icon: React.createElement(LuGraduationCap),
    date: " 2022 - 2024",
  },



  {
    title: "IT maintenance technician intern",
    location: "TIBH",
    description:
      "6-month internship as an IT maintenance technician. Involved diagnosing and solving hardware and software issues, and recovering lost data.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "IT maintenance technician intern",
    location: "Autoliv",
    description:
      "2-month internship as an IT maintenance technician. Involved monitoring and maintaining computer systems and networks, and resolving hardware and software issues.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "BTP maintenance micro-système informatique",
    location: "Centre Sectoriel de formation en BTP de Nabeul",
    description: "A 2-year program focused on maintaining and repairing computer systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
] as const;
export const projectsData = [
  {
    title: "FlexFit Gym ",
    description:
      "The FlexFit Gym website is a modern, responsive platform designed to showcase the services offered by FlexFit Gym, a premier fitness facility.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    imageUrl: pic1,
    projectLink: "https://flexfit-gym.vercel.app/",
  },
  {
    title: "Portfolio website",
    description:
      "A personal portfolio website built using modern technologies like Next.js, Framer Motion,React Icons  and Tailwind CSS. It showcases my skills, projects, and experiences.",
    tags: ["Framer Motion", "TypeScript", "Next.js", "Tailwind",],
    imageUrl: pic2,
    projectLink: "https://houssemmehouachi.me/",
  },
  {
    title: "Cipher Protocol Blog",
    description:
      "A blog app built using React.js, Framer Motion, Tailwind CSS, GraphQL and Hygraph CMS.  ",
    tags: ["Framer Motion", "React.js", "Next.js", "Tailwind", "GraphQL", "Hygraph CMS"],
    imageUrl: pic3,
    projectLink: "https://blog.houssemmehouachi.me/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "React.js",
  "Next.js",
  "Figma, ",
  "Node.js",
  "Tailwindcss",
  "UX/UI",
  "Git",
  "Tailwind",
  "MongoDB",
  "developing web interfaces",
  "designing web interfaces",
  "Express",
  "Framer Motion",
] as const;