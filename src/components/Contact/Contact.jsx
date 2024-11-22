import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div className="contact">
        {/* 
            <div className="contact-title">
                <h1>Send me a message!</h1>
            </div> 
            */}
            
        <div className="contact-section">
            <div className="contact-left">
                <h1>Send a Message</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. Message me.</p>
                <div/>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>hellotosinfaith@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+234 8123 539192</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name="email" />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Hi Tosin, "></textarea>
                <button type='submit' className='contact-submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact