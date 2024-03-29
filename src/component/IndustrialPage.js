import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../src/assert/industrial.css'
import IndustryCard from './subComponents/IndustryCard'
import data from '../data/industrialCard'
import IndustryData from '../../src/data/industrial'
import notepadIcon from '../assert/images/iconNotepadYellow.png';
import FAQSection from './common/FAQSection';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Lottie from 'lottie-react';
import animationData from '../assert/images/y8Ke7DzWpt.json';  
import icon1 from '../assert/industrialIcons/recordingIcon.png';
import GradientButton from '../../src/component/common/GradientButton'


function IndustrialPage() {

    const sectionRef = useRef(null);
    const sectionRef2 = useRef(null);
    const sectionRef3 = useRef(null);
    const sectionRef4 = useRef(null);

    useEffect(() => {
        gsap.to(sectionRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%', 
            end: '80% bottom',
            scrub: true,
          },
         
          opacity:1,
          y: -30,
        });

        gsap.to(sectionRef2.current, {
            scrollTrigger: {
              trigger: sectionRef2.current,
              start: 'top center', 
              end: '80% bottom',
              scrub: true,
            },
            opacity:1,
            y: -20,
          });

          gsap.to(sectionRef3.current, {
            scrollTrigger: {
              trigger: sectionRef3.current,
              start: 'top 90%', 
              end: '80% bottom',
              scrub: true,
            },
           
            opacity:1,
            y: -30,
          });

          gsap.to(sectionRef4.current, {
            scrollTrigger: {
              trigger: sectionRef4.current,
              start: 'top center', 
              end: '80% bottom',
              scrub: true,
            },
            opacity:1,
            y: -20,
          });

          gsap.to(".industial-intro-page", {
            ease: 'power5.out',
            // border: "solid 0.1px rgb(0, 0, 0)",
            // borderRadius: "0px",
            scrollTrigger: {
              trigger: ".industial-intro-page",
              start: 'top 10%',
              toggleActions: 'play none none reverse',
              scrub: true,
            },
          });
    
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill();
          });
        };
      }, []);

    return (
        <div className='industrial-page'>
            <div className='industial-intro-pag'>
                {/* <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: '1000px', height: '1000px' }}
                />  */}
                <div className='transparent-section'>
                  <div className='is1-heaeder'>{IndustryData.realEstate.intoPageHeading}</div>
                  <div className='is1-subHeader'>{IndustryData.realEstate.intoPageSubHeading}</div>
                  <div className='icon-points-section'>
                    {
                      IndustryData.realEstate.intoPgaeIcons.map((item, index)=>{
                        return(
                        <div key={index} className='icon-and-expalantion'>
                          <div className='blur-bg'>
                             <img className='i-icon' src ={icon1}></img>
                          </div>
                          <div className='i-icon-explanation'>{item.iconExplantion}</div>
                        </div>
                        )
                      })
                    }
                  </div>
                  <GradientButton arrow ={true} name ="Book Demo" className = "industrial-book-demo"/>
                </div>
            </div>
            <div className='why-section-parent'>
              <div className='why-section'>
                  <h1 ref ={sectionRef} className='why-heading'>Why Real Estate CRM ?</h1>
                  <div ref ={sectionRef2} className='why-explanation'>A real estate CRM is a specialized tool designed for real estate agents, brokers, and agencies to help streamline sales processes, organize client information, and manage leads, properties, and appointments efficiently.</div>
              </div>
            
            

            <div className='why-section'>
                <h1 ref ={sectionRef3} className='why-heading'>Why is a Real Estate CRM important for Real Estate Agents?</h1>
                <div ref ={sectionRef4} className='why-explanation'>Keeping track of team activity and performance, customer interactions, and managing sales pipeline is a huge challenge for all real estate agencies. And that's where a real estate CRM like TeleCRM can help. With a real estate CRM, you can</div>
            </div>

            </div>

            <div className='with-crm'>
                <div className='tiny-card-heading'>Real Estate CRM can help you with</div>
                <div className='tiny-cards-container row justify-content-center'> 
                    {
                         IndustryData.realEstate.miniCard.map((item, index) =>(
                            <div className='tiny-card col-3 m-3' style ={{padding:"0.5px"}}>
                              <div className='card-foreground col-12'>
                              <div className='tiny-card-title'>
                                    <img className='tiny-card-icon' src = {notepadIcon}></img>
                                    <div className='tiny-card-name'>{item.heading}</div>
                                </div>
                               
                                <div className='tiny-card-description'>{item.content}</div>
                              </div>

                            </div>
                         ))
                    }
                </div>
            </div>
            <div className='parent-ic-card-section'>
                <div className='parent-ic-header'>Key Features in a Real Estate CRM Software</div>
                <div className='parent-ic-subHeader'>A real estate CRM like TeleCRM has a unique set of features tailored to meet the unique requirements of all real estate businesses.</div>
                {
                    data.featureSections.map((item, index)=>(
                        <IndustryCard cardData = {item} index = {index}></IndustryCard>
                    )) 
                }
                {
                    data.featureSections.map((item, index)=>(
                        <IndustryCard cardData = {item} index = {index}></IndustryCard>
                    )) 
                }
            </div>

            <FAQSection></FAQSection>
            

        </div>
    );
}

export default IndustrialPage;