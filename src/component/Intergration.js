import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../src/assert/intergrationSection.css"

import compnayLogo from '../../src/assert/intergrationIcons/companyLogo.png'
import logo1 from '../../src/assert/intergrationIcons/logo1.png'
import logo2 from '../../src/assert/intergrationIcons/logo2.png'
import logo3 from '../../src/assert/intergrationIcons/logo3.png'
import logo4 from '../../src/assert/intergrationIcons/logo4.png'
import logo5 from '../../src/assert/intergrationIcons/logo5.png'
import logo6 from '../../src/assert/intergrationIcons/logo6.png'


function Intergration() {

  const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {

      gsap.to(".intergration-section", {
        scrollTrigger: {
          trigger: ".intergration-section",
          start: 'top 40%', 
          end: 'bottom bottom',
          onEnter: () => {
            setStartAnimation(true);
          },
        },
      });

        // gsap.to(".intergration-logo2", {
        //     scrollTrigger: {
        //       trigger: ".intergration-section",
        //       start: 'top 70%', 
        //       end: 'bottom bottom',
        //       // scrub: true,
        //     },
        //     marker:true,
        //     x: "20vh",
        //     y: "-30vh",
        //     scale:1.1,
        //   });
          

        //   gsap.to(".intergration-logo3", {
        //     scrollTrigger: {
        //       trigger: ".intergration-section",
        //       start: 'top 70%', 
        //       end: 'bottom bottom',
        //       // scrub: true,
        //     },
        //     marker:true,
        //     x: "0vh",
        //     y: "-30vh",
        //     scale:1.1,
        //   });

        //   gsap.to(".intergration-logo4", {
        //     scrollTrigger: {
        //       trigger: ".intergration-section",
        //       start: 'top 70%', 
        //       end: 'bottom bottom',
        //       // scrub: true,
        //     },
        //     marker:true,
        //     x: "0vh",
        //     y: "20vh",
        //     scale:1.1,
        //   });
    
        return () => {
        };
      }, []);


    return (
      <div className='bg-styling'>
        <div className='parent-intergration-section'>
          <div className='intergation-heading'>A holistic view of your business operations</div>
              <div className='intergration-section'>
                  <div className='logo-gradient-border'>
                      <img className='intergration-compnay-logo' src= {compnayLogo}></img>
                  </div>
                    <img className= {`intergration-logo1 ${startAnimation ==true ? "transform-logo1" : ""}`} src= {logo1}></img>
                    <img className= {`intergration-logo2 ${startAnimation ==true ? "transform-logo2" : ""}`} src= {logo2}></img>
                    <img className= {`intergration-logo3 ${startAnimation ==true ? "transform-logo3" : ""}`} src= {logo3}></img>
                    <img className= {`intergration-logo4 ${startAnimation ==true ? "transform-logo4" : ""}`} src= {logo4}></img>
                    <img className= {`intergration-logo5 ${startAnimation ==true ? "transform-logo5" : ""}`} src= {logo5}></img>

                    <img className= {`intergration-logo6 ${startAnimation ==true ? "transform-logo6" : ""}`} src= {logo6}></img>
                    <img className= {`intergration-logo7 ${startAnimation ==true ? "transform-logo7" : ""}`} src= {logo2}></img>
                    <img className= {`intergration-logo8 ${startAnimation ==true ? "transform-logo8" : ""}`} src= {logo5}></img>
                    <img className= {`intergration-logo9 ${startAnimation ==true ? "transform-logo9" : ""}`} src= {logo4}></img>
                    <img className= {`intergration-logo10 ${startAnimation ==true ? "transform-logo10" : ""}`} src= {logo5}></img>
              </div>
        </div>
      </div>

    );
}

export default Intergration;