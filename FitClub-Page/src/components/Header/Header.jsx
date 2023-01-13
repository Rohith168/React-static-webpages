import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className="logo"/>
        <ul className='header-menu'>
          <li><Link to="hero" spy={true} smooth={true} offset={0} duration={500} >Home</Link></li>
          <li><Link to="programs" spy={true} smooth={true} offset={0} duration={500} >Programs</Link></li>
          <li> <Link to="joinus" spy={true} smooth={true} offset={50} duration={500} >Why us</Link></li>
          <li> <Link to="plans" spy={true} smooth={true} offset={50} duration={500} >plans</Link></li>
          <li><Link to="testimonials" spy={true} smooth={true} offset={50} duration={500} >Testimonial</Link></li>
        </ul>
    </div >
  )
}

export default Header