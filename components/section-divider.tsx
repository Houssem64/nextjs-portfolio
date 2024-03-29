"use client";
import React from 'react'
import { motion } from 'framer-motion'
export default function SectionDivivder() {
  return (
    <motion.div className='bg-gray-200 my-20 h-24 w-1 rounded-full hidden sm:block'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.125 }}

    ></motion.div>
  )
}



