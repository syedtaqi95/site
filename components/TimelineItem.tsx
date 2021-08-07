import React from 'react'
import { TimelineItemType } from '../types'

const TimelineItem = (props: TimelineItemType) => {
  return (
    <div className="timeline">
      <div className="icon"></div>
      <div className="date-content">
        <div className="date-outer">
          <span className="date">
            <span className="month">{props.month}</span>
            <span className="year">{props.year}</span>
          </span>
        </div>
      </div>
      <div className="timeline-content">
        <h5 className="title">{props.title}</h5>
        <p className="description">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default TimelineItem
