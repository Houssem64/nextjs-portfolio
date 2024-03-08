"use client";
import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { SiMinutemailer } from "react-icons/si";

export default function Contact() {

    return (
        <section id="contact" className="flex flex-col items-center justify-center w-full h-screen mt-22">
            <form className="flex flex-col items-center justify-center w-full h-3/4">
                <SectionHeading>Contact</SectionHeading>
                <div className='w-3/4 h-full pb-8 text-center bg-white/40 rounded-xl justify-center items-center mx-auto'>
                    <p className="text-white mb-2 mt-10 font-bold text-xl">I'm currently looking for new opportunities, my inbox is always open.</p>
                    <p className="text-white mb-10 font-bold text-xl">Get in Touch Now: <a href='mailto:houssem@outlook.com' className='text-black capitalize font-extrabold'>houssem@outlook.com</a></p>

                    <motion.input whileHover={{ scale: 1.1 }} type="text" placeholder="Email" className="w-1/2 rounded-lg p-3 m-2 border-2 border-gray text-black font-semibold hover:ring-4 hover:ring-bg-gradient" />
                    <motion.textarea whileHover={{ scale: 1.1 }} placeholder="Message" className="w-1/2 h-1/3 px-3 mt-2 mb-3 mx-3 rounded-l border-b-2 border-2 border-gray font-semibold text-black hover:ring-4 hover:outline-bg-gradient hover:ring-bg-gradient" />
                    <motion.button type='submit' className="bg-bg-gradient flex-nowrap whitespace-nowrap px-3 mx-2 mb-12 w-1/2 text-lg text-white outline-none hover:ring-1 hover:ring-bg-gradient font-bold hover:outline-bg-gradient hover:bg-gray-950 items-center gap-2 rounded-full"
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <div className="flex items-center px-4 h-12 justify-center">
                            Send&nbsp;
                            <SiMinutemailer />
                        </div>
                    </motion.button>
                </div>
            </form>
        </section>


    )
}
