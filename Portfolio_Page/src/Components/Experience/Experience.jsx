import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
<div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle">
            <div>8+</div></div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">
            <div>20+</div></div>
        <span>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">
            <div>5+</div></div>
        <span>companies </span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience