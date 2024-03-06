"use client";
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { skillsData } from "@/lib/data"
export default function Skills() {
    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 '>
            <SectionHeading>Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li className='bg-white border broder-black/[0.1] rounded-xl px-5 py-3 ' key={index}
                            whileHover={{ scale: 1.2 }}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}


                        >{skill}</motion.li>

                    ))
                }
            </ul>


        </section>)
}
