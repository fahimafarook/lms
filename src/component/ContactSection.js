import React from 'react';
import "../../src/assert/contactSection.css"
import phoneIcon from '../../src/assert/images/phone-icon-white.png'
import emailIcon from '../../src/assert/images/email-icon-white.png'

function ContactSection(props) {
    return (
        <div style={{backgroundColor:"black"}}> 
               <div className='cu-header'>Contact Us</div>
        <div className='contact-section'>
          
            <div className='cu-section'>
                <div className='cu-address'>Address<br/>
                Brigade World Trade Center Sales office 5, <br/>
                142, Rajiv Gandhi Salai, Chennai,  <br/>
                Tamil Nadu - 600096 <br/>
                </div>
                <div className='cu-line'>
                    <img className='cu-icon' src={phoneIcon}></img>
                    <span className='cu-phone'>+91920742386</span>
                </div>

                <div className='cu-line'>
                    <img className='cu-icon' src={emailIcon}></img>
                    <span className='cu-email'>fridayjarvis@gmail.com</span>
                </div>
              
               
            </div>
            <div className='maps'>
            <iframe className='map-container' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17213.23761844441!2d80.23058571172677!3d12.958296407318768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d67c256386d%3A0xb3f56b3c34805aac!2sWorld%20Trade%20Center%20Chennai!5e0!3m2!1sen!2sin!4v1705685288224!5m2!1sen!2sin" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
        </div>
    );
}

export default ContactSection;