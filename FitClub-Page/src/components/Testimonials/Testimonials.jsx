import React from 'react'
import './Testimonials.css'
import leftarrow from'../../assets/leftArrow.png'
import rightarrow from'../../assets/rightArrow.png'
import { useState } from 'react'
import {testimonialsData} from '../../data/testimonialsData'
const Testimonials = () => {
    const [selected, setselected] = useState(0)
    const tlength=testimonialsData.length;
  return (
    <div className="Testimonials" id="testimonials">
        <div className="left-t">
           <span>Testimonials</span>
           <span className='stroke-text'>What they</span>
           <span>say about us</span>
           <span>
            {testimonialsData[selected].review}
           </span>
           <span>
            <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>
            <span>{" "}~ {testimonialsData[selected].status}</span>
           </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img 
                onClick={()=>{
                    selected===0?setselected(tlength-1):
                    setselected((prev)=>prev-1)
                }} src={leftarrow} alt="" />
                <img
                 onClick={()=>{
                    selected===tlength-1?setselected(0):setselected((prev)=>prev+1)
                }}  src={rightarrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials