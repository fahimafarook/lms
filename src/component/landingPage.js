import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../src/assert/landingPage.css";
import lmsvid from "../assert/images/lmsvid2.mp4";
import logo from "../assert/images/logo.png";
import FeatureSection from "../component/FeatureSection"
import data from '../data/featureDetails';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
    const count = useRef(0);
    

    useEffect(() => {
        if (count.current === 0) {
        
        gsap.to(".product-tagline-higlitght", {
          x: 2, 
          y: -5, 
          duration: 4,
          scrollTrigger: {
            trigger: ".product-tagline-higlitght",
            start: "top 15%",
            end: "bottom 5%",
            toggleActions: "play none reverse none", 
            scrub: true,
            // markers: true
          },
        });

        gsap.to(".trigger-1", {
            y: -5, 
            duration: 4,
            scrollTrigger: {
              trigger: ".product-tagline-higlitght",
              start: "top 15%",
              scrub: true,
              // markers: true
            },
          });

          gsap.to(".trigger-2", {
            y: -5, 
            duration: 4,
            scrollTrigger: {
              trigger: ".product-tagline-higlitght",
              start: "top 15%",
              scrub: true,
              // markers: true
            },
          });

          gsap.to(".book-Demo", {
            scrollTrigger: {
              trigger: ".product-tagline-higlitght",
              start: "top 15%",
              scrub: true,
            },
          });

        //   gsap.to(".lms-vid-container", {
        //     width: "80vw",
        //     x: "-50%",
        //     y: 320,
        //     transformOrigin: "center",
        //     duration: 4,
        //     toggleActions: "play none reverse none", 
        //     scrollTrigger: {
        //         trigger: ".product-tagline-higlitght",
        //         start: "top 15%",
        //         scrub: true,
        //         onEnter: () => {
        //             document.querySelector(".overlay").classList.add("overlay-hidden");
        //         },
        //         onLeaveBack: () => {
        //           document.querySelector(".overlay").classList.remove("overlay-hidden");
        //         }
        //     },
        // });


        function setScrollText(){

          gsap.to('#heading1', {
            scrollTrigger: {
              trigger: '#heading1',
              toggleActions: 'play reverse play reverse',
              start: '0s',
              end: '+=1000s',
              overwrite: true, // Use this line
              onComplete: () => {
                gsap.to('#heading1', { opacity: 0, color: 'white' });
              },
            },
            opacity: 1,
          });

          gsap.to('#heading4', {
            scrollTrigger: {
              trigger: '#heading4',
              toggleActions: 'play reverse play reverse',
              start: '+=1000s',
              end: '+=1000s',
              overwrite: true, // Use this line
              onComplete: () => {
              },
            },
            opacity: 1,
          });
          
          gsap.to('#heading2', {
            scrollTrigger: {
              trigger: '#heading2',
              toggleActions: 'play reverse play reverse',
              start: '+=2000s',
              end: '+=1000s',
              overwrite: true, // Use this line
              onComplete: () => {
                gsap.to('#heading2', { opacity: 0, color: 'white' });
              },
            },
            opacity: 1,
          });

          gsap.to('#heading4', {
            scrollTrigger: {
              trigger: '#heading4',
              toggleActions: 'play reverse play reverse',
              start: '+=3000s',
              end: '+=1000s',
              overwrite: true, // Use this line
              onComplete: () => {
              
              },
            },
            opacity: 1,
          });
        
          
          gsap.to('#heading3', {
            scrollTrigger: {
              trigger: '#heading3',
              toggleActions: 'play reverse play reverse',
              start: '+=4000s',
              end: '+=1000s',
              overwrite: true, // Use this line
              onComplete: () => {
                gsap.to('#heading3', { opacity: 0, color: 'white' });
              },
            },
            opacity: 1,
          });
        
        }
        
       
        
        // gsap.to('.head', {
        //   scrollTrigger: {
        //     pin: '.head',
        //     end: '+=5200s', 
        //     pinSpacing: true,
        //     width: "100vw",
        //     left:"0px",
        //   },
        // });
        
        // setScrollText();
        count.current = count.current + 1;
      }
    }
    )

    return (
        <div className='landing-page'>
          <div className='product-landing'>
            <div className='row d-flex  justify-content-between'>
              <img className = "col-md-2 logo" style ={{"width":"150px" ,"height":"120px"}} src={logo}></img>
              <div className="row top-bar col-md-8 justify-content-around">
                  <div className="top-bar-item col-2">Feature</div>
                  <div className="top-bar-item col-2">Pricing</div>
                  <div className="top-bar-item col-2">FAQ</div>
                  <div className="top-bar-item col-2">Contact</div>
                  <div className="top-bar-item col-2">Get Started</div>
                </div>
            </div>


            <div style ={{"marginTop": "10vh"}}></div>
              <div className='product-tagline trigger-1'>Your Smart</div>
              <div className='product-tagline-higlitght'>Telecalling</div>
              <div className='product-tagline trigger-2'>software.</div>
              <div className='book-Demo'>Book Free Demo</div>

            


              <div className="lms-vid-container">
              {/* <Spline className= "mobile-3d-home-page" scene="https://prod.spline.design/h8l4YY8YrtqZPOmN/scene.splinecode"
              style={{ width: '100%', height: '100%' }} /> */}
              {/* <div className="overlay overlay-visible"></div>
              <video className="lms-vid" width="90vw" height="60vh" autoPlay loop muted style={{ zIndex: 1 }}>
                  <source src={lmsvid} type="video/mp4" />
                  Your browser does not support the video tag.
                  </video> */}
            </div>
        </div>


          {/* <div class="head">
            <div class="main"></div>
            <div class="content-box">
                <h2 class="heading" id="heading1">Struggling to manage your leads</h2>
                <h2 class="heading" id="heading2">No worries!</h2>
                <h2 class="heading" id="heading3">Look what we have got for u 👀</h2>
                <h2 class="heading" id="heading4"></h2>
                <h2 class="heading" id="heading5"></h2>
            </div>
          </div> */}
            
         <div className='background-pattern-x'>
         {data.map((item) => (
            <FeatureSection key={item.id} {...item} />
          ))}
        
          <div className='spacing'></div>
         </div>
          
         

        </div>
    );
}

export default LandingPage;