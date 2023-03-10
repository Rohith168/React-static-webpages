import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Joinus.css'

const Joinus = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="joinus" id="joinus">
        <div className="left-j">
            <hr></hr>
            <div>
                <span className='stroke-text'>READY TO  </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY  </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form class="email-container" ref={form} onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email Address here...  '></input>
                <button type='submit' class='btn btn-j'>Join now</button>
            </form>
        </div>
        
    </div>
  )
}

export default Joinus