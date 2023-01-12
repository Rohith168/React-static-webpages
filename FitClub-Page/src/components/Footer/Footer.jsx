import React from 'react'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footercontainer">
        <hr/>
     <div class="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          </div>
          <div className="logo">
        <img src={Logo} alt="" />
      </div>
      </div>
      </div>
     

)}

export default Footer