"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education } from '@/lib/data';
export default function Education() {
    return (

        <section id="experience">
            <SectionHeading>Education</SectionHeading>
            <VerticalTimeline lineColor='white'>
                {
                    education.map((education, index) => (
                        <React.Fragment key={index} >
                            <VerticalTimelineElement
                                visible={true}
                                dateClassName="text-black-950 font-bolder text-lg"
                                contentStyle={
                                    {
                                        background: '#f3f4f6',
                                        boxShadow: 'none',
                                        border: '1px solid #e5e7eb',
                                        textAlign: 'left',
                                        padding: '1.3rem 2rem',

                                    }
                                }
                                contentArrowStyle={
                                    {
                                        borderRight: "0.4rem solid #9ca3af"
                                    }
                                }
                                date={education.date}

                                icon={education.icon}
                                iconStyle={{
                                    background: '#f3f4f6',
                                    color: '#000000',
                                    boxShadow: 'none',
                                }} >
                                <h3 className='font-semibold capitalize' >{education.title}</h3>
                                <p className='font-normal !mt-0'>{education.location}</p>
                                <p className='!mt-1 !font-normal text-gray-950'>{education.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>))
                }
            </VerticalTimeline>

        </section>
    )
}
