import React from 'react'
import Header from '../Header/Header'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="l-hero">
            <Header></Header>
            {/* the best ad */}
            <div className="the-best-ad">
              <div></div>
              <span>The best Fitness club int he town</span>
            </div>
            {/* Hero Headding */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape </span>
                <span>your</span>
                </div>
                <div>
                  <span>Ideal body</span>
                </div>
                <div>
                  <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
            {/* figures */}
            <div className="figures">
              <div><span>140+</span><span>Expert Coaches</span></div>
              <div><span>978+</span><span>Members Joined</span></div>
              <div><span>50+</span><span>Fitness programs</span></div>
            </div>
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn more</button>
            </div>
        </div>
        <div className="r-hero"> 
        <button className='btn'>Join Now</button>
      <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart rate</span><span> 116 bpm</span>
      </div>
      <img src={hero_image} alt="" className='hero-image'/>
      <img src={hero_image_back} alt="" className='hero-image-back'/>
      <div className="calories">
        <img src={Calories} alt="" />
        <div><span>Calories burned</span><span>220kcal</span></div>
      </div>
        </div>
    </div>
  )
}

export default Hero