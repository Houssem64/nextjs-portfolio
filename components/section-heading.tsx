import React from 'react'
type SectionHeadingProps = {
  children: React.ReactNode
}
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='tracking-tight text-black-950 md:text-5xl lg:text-6xl  text-4xl mb-8 font-extrabold leading-none capitalize text-center'>{children}</h2>
  )
}
