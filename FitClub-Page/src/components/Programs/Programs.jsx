import React from 'react'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from'../../data/programsData'
const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explore</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((data)=>
            
               <div className="category">
                {data.image}
                <span>{data.heading}</span>
                <span>{data.details}</span>
                <div className="join-now">
                    <span>Join now</span>
                    <img src={RightArrow} alt="" />
                </div>
               </div>
            )}
        </div>
    </div>
  )
}

export default Programs