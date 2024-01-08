import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../assert/industryCard.css"
import phoneMock from '../../assert/images/ic-imageMock.png'
import tick from '../../assert/images/greyTick.png'

function IndustryCard(props) {

    const sectionRef = useRef(null);
    const sectionRef2 = useRef(null);
    const sectionRef3 = useRef(null);

    useEffect(() => {
        gsap.to(sectionRef2.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center', 
            end: '80% bottom',
            scrub: true,
          },
         
          backgroundImage: "radial-gradient(circle, rgb(73, 32, 114) 0%, rgb(0, 0, 0) 70%)",
          opacity:1,
        });

        

        // gsap.to(sectionRef3.current, {
        //     scrollTrigger: {
        //       trigger: sectionRef3.current,
        //       start: 'top center', 
        //       end: '80% bottom',
        //       scrub: true,
        //     },
        //    scale: 1.02,
            
        //   });
    
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill();
          });
        };
      }, []);

    return (
        <div ref={sectionRef} className='industry-card-section'>
            <div className={`ic-left-section ${props.index% 2 == 0 ? 'transform-ic-left' : ""}`}>
                <div ref={sectionRef2} className='background-overlay'></div>
                <img ref={sectionRef3} className='ic-mobile-screen' src = {phoneMock}></img>
            </div>
            <div  className={`ic-right-section ${props.index % 2 == 0 ? 'transform-ic-right' : ""}`}>
                <div className='ic-details-container'>
                    <div className='ic-name'>{props.cardData.name}</div>
                    <div className='ic-tagline'>{props.cardData.tagline}</div>
                    {/* <div className='ic-description'>{props.cardData.description}</div> */}
                    { 
                        props.cardData.points.map((item, index) => (
                            <div className='ic-points-container'>
                                <img className='ic-point-tick' src={tick}></img>
                                <div className='ic-point'>{item}</div>
                            </div>
                           
                        ))
                    }
                   
                </div>
               
            </div>
        </div>
    );
}

export default IndustryCard;