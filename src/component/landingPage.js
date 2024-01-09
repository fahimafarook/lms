import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../src/assert/landingPage.css";
import lmsvid from "../assert/images/lmsvid2.mp4";
import logo from "../assert/images/logo.png";
import FeatureSection from "../component/FeatureSection"
import data from '../data/featureDetails';
import Spline from '@splinetool/react-spline';
import AllFeatures from '../component/AllFeatures'
import GradientButton from '../component/common/GradientButton'
import Intergration from '../component/Intergration'


gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
    const count = useRef(0);
    

    useEffect(() => {
        if (count.current === 0) {

        gsap.to(".trigger-1", {
            y: -50, 
            duration: 4,
            scrollTrigger: {
              trigger: ".container-section",
              start: "top 25%",
              scrub: true,
            },
          });

        const tl = gsap.timeline();

        gsap.from(".line-text", {
          duration: 2,
          y: 185,
          ease: "power4.out",
          skewY: 10,
          repeat: -1,        
          repeatDelay:2, 
          yoyo: true, 
          stagger: {
            amount: 0.3
          },
        });
        count.current = count.current + 1;
      }
    }
    )

    return (
        <div className='landing-page'>
          <div className='product-landing'>
              <div className='container-section'>
                <h1 className='product-tagline trigger-1'>Your Smart</h1>
                <div className='text-container trigger-1'>
                  <span className="line1">
                    <div className='product-tagline-higlitght line-text'>Telecalling</div>
                  </span>
                </div>
                <h1 className='product-tagline trigger-1'>software.</h1>
                <div className='paragraph trigger-1'>Collaborate, manage projects and reach new productivity peaks. From high rises to the home office, accomplishit all with Zaiask!</div>

                <GradientButton className = "book-demo-button" arrow = {true} name ={"Book Demo"}></GradientButton>
              </div>
            



              {/* <div className="lms-vid-container">
              <Spline className= "mobile-3d-home-page" scene="https://prod.spline.design/h8l4YY8YrtqZPOmN/scene.splinecode"
              style={{ width: '100%', height: '100%' }} />
            </div> */}
        </div>
        
        <Intergration></Intergration>

        <div style={{marginTop: "15vh"}}></div>
         {data.map((item) => (
            <FeatureSection key={item.id} {...item} />
          ))}

         

          <div className='spacing'></div>
        </div>
    );
}

export default LandingPage;