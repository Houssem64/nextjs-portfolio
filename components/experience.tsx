"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
export default function Experience() {
    return (

        <section id="experience">
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline>
                {
                    experiencesData.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={experience.date}
                            dateClassName="text-gray-700"

                            iconStyle={{}}
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
                        >
                            <h3 className="vertical-timeline-element-title">{experience.icon}{experience.title}</h3>
                            <p>
                                {experience.location}
                            </p>
                            <p>
                                {experience.description}
                            </p>

                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>

        </section>
    )
}
