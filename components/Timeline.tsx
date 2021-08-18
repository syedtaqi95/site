import React from 'react'
import TimelineItem from './TimelineItem'
import { TimelineItemType } from '../types'

const Timeline = () => {

  const items: TimelineItemType[] = [
    {
      month: "September",
      year: 2013,
      title: "University Student",
      description: "Started my MEng (Hons) degree in Electrical and Electronic \
      Engineering at the University of Bristol. Awarded the Paul Dirac Scholarship in EE.",
    },
    {
      month: "Summer",
      year: 2015,
      title: "Software/Electronic Engineering Intern",
      description: "Joint research project between the University of Bristol and Boeing to build \
      a long-range drone/UAV for volcanology research.",
    },
    {
      month: "Summer",
      year: 2016,
      title: "FPGA Development Intern",
      description: "Summer intern at the Mathworks Glasgow office. Developed Simulink examples for wireless \
      applications such as radar and FM using the Xilinx Zync System-On-Chip.",
    },
    {
      month: "June",
      year: 2017,
      title: "University Graduate",
      description: "Graduated with First Class Honours and placed as one of the top students in the cohort.",
    },
    {
      month: "September",
      year: 2017,
      title: "Graduate Engineer",
      description: "Started a 2-year product engineering graduate scheme with Jaguar Land Rover. Placements focused on software development\
      in areas such as ADAS simulation, ECU development, and proof of concept for a future vehicle software architecture.",
    },
    {
      month: "September",
      year: 2019,
      title: "Driver Information Software Engineer",
      description: "Software delivery lead for modules such as instrument clusters in Jaguar Land Rover vehicles, \
      totaling over 500,000 vehicles per year.",
    },
    {
      month: "July",
      year: 2021,
      title: "Professional Scrum Master",
      description: "Became a Scrum Master for my team and enabled our transition to agile ways of working. \
      Completed the Scrum.org PSM I certification.",
    }
  ]

  return (
    <>
      <div className="main-timeline">

        {items.map(item => (
          <TimelineItem
            key={item.title}
            month={item.month}
            year={item.year}
            title={item.title}
            description={item.description}
          />)
        )}

      </div>
    </>
  )
}

export default Timeline
