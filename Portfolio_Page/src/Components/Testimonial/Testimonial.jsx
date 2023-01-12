import React from 'react'
import './Testimonial.css'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
const Testimonial = () => {
    const clients = [
        {
          img: profilePic1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: profilePic4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];
  return (
 
    <><div className="testimonial">
          <div className="t-heading">
              <span>Clients get</span>
              <span>Exceptional Work</span>
              <span>from me...</span>
          </div>

      </div>
      <div className="t-blur">
        <div className="s-blur1"></div>
        <div className="s-blur2"></div>
      </div>
      <div className="Swiper">
      <Swiper className="swp"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {clients.map((client,index)=>{
            return(
                
                    
                    <SwiperSlide className='SwiperSlide' key={index}>
                        <div className="t-data">
                        <img src={client.img} alt="" />
                         <span>{client.review}</span>
                         </div>
                    </SwiperSlide>
                    
                
            )
        })}
      </Swiper>
      </div>
      </>
  )
}

export default Testimonial