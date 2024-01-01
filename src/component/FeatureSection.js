import {React, useState, useRef, useEffect} from 'react';
import "../assert/featureSection.css"
import data from '../data/featureDetails';
import screen1 from '../assert/images/phone1.png';
import phoneDotBg from '../assert/images/Drawing.png';
import upIcon from '../assert/images/upArrow.png';
import downIcon from '../assert/images/downArrow.png';
import screen2 from '../assert/images/phone2.png';
import phoneBg from '../assert/images/phone-bg.png';
import icon1 from '../assert/images/icon1.png';
import icon2 from '../assert/images/icon2.png';
import icon3 from '../assert/images/icon3.png';
import icon4 from '../assert/images/icon4.png';
import icon5 from '../assert/images/icon5.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

function FeatureSection(props) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const [updownArrow, setUpDownArrow] = useState(false);
    const [animatePhone, setAnimatePhone] = useState(false);
    const currentSubMenuIndex = useRef(0);
    const subMenuLength = props.subMenu.length;

    const phoneScreenElement = document.querySelector('.phone-screen');
    const featureBarHeight = useRef(0);
    const featureProgressBar = useRef(0);
    const count= useRef(0);

    const sectionHeaderRef = useRef(null);
    const sectionSubHeaderRef = useRef(null);
    const featureDescriptionRef = useRef(null);
    const scrollYValue = useRef(null);
    const cardRef = useRef(null);
  


    const downIconClick= () => {
        setUpDownArrow(!updownArrow);
        if(currentSubMenuIndex.current === subMenuLength-1){
            currentSubMenuIndex.current = 0;
        }
        else 
            currentSubMenuIndex.current = currentSubMenuIndex.current + 1
        featureProgressBar.current.classList.add("feature-progress-bar");
        setAnimatePhone(true);
    }

    const upIconClick = () =>{
        setUpDownArrow(!updownArrow);
        if(currentSubMenuIndex.current === 0){
            currentSubMenuIndex.current = subMenuLength-1;
        }
        else
            currentSubMenuIndex.current = currentSubMenuIndex.current - 1;
        setAnimatePhone(true);
    }

    useEffect(()=>{
        
        featureBarHeight.current = document.getElementsByClassName("feature-bar")[props.id - 1].getBoundingClientRect().height;
        featureProgressBar.current = document.getElementsByClassName("feature-progress-bar")[props.id - 1];
        featureProgressBar.current.style.height = `${featureBarHeight.current/subMenuLength * (currentSubMenuIndex.current+1)}px`;

    },[updownArrow])

    useEffect(() => {
        if(animatePhone === true) {
            setTimeout(() => setAnimatePhone(!animatePhone), 100);
        }
    }, [animatePhone])


    useEffect(() => {
        if(count.current === 0){

            const featureDescription = featureDescriptionRef.current;

            gsap.from(featureDescription, {
                opacity: 0.6,
                y: 20,
                duration: 1,
                ease: 'power5.out',
                scrollTrigger: {
                  trigger: featureDescription,
                  start: 'top 100%', 
                  end: 'top 80%',
                  toggleActions: 'play none none reverse',
                  scrub: true,
            },
            });

            const sectionSubHeader = sectionSubHeaderRef.current;
            gsap.from(sectionSubHeader, {
              opacity: 0.6,
              y: 50,
              duration: 1,
              ease: 'power5.out',
              scrollTrigger: {
                trigger: sectionSubHeader,
                start: 'top 90%', 
                end: 'top 20%',
                toggleActions: 'play none none reverse',
                scrub: true,
              },
            });


            gsap.from(sectionHeaderRef.current, {
                opacity: 0.6,
                y: 50,
                duration: 1,
                ease: 'power5.out',
                scrollTrigger: {
                  trigger: sectionHeaderRef.current,
                  start: 'top 90%',
                  end: 'bottom 20%',
                  toggleActions: 'play none none reverse',
                  scrub: true,
                },
              });

              gsap.to(cardRef.current, {
                width: "100vw",
                ease: 'power5.out',
                // border: "solid 0.1px rgb(0, 0, 0)",
                borderRadius: "0px",
                scrollTrigger: {
                  trigger: cardRef.current,
                  start: 'top 50%',
                  toggleActions: 'play none none reverse',
                  scrub: true,
                },
              });
            }
              

      count.current = count.current+1;
    }

      , []);


      useEffect(() => {
        const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX - document.getElementsByClassName("feature-section")[props.id-1].getBoundingClientRect().left - 50, y: e.clientY-document.getElementsByClassName("feature-section")[props.id-1].getBoundingClientRect().top -50});
          // console.log(e.clientX, e.clientY);
        };

        const handleScrollMove= () => {
          const scrolledBy =  window.scrollY - scrollYValue.current;
          scrollYValue.current = window.scrollY;
          console.log("scrolled", window.scrollY, mousePosition.x, mousePosition.y);
          setMousePosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + scrolledBy }));
        }
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('scroll', handleScrollMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('scroll', handleScrollMove);
        };
      }, []);
    

    

    return (
        <div className='feature-section-parent'>
        <div ref={cardRef} className='feature-section'>
        <div className="pointer-light"style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} ></div>
            <div className='left-section'>
                <div ref={sectionHeaderRef} className='section-header'>{props.description}</div>
                <div ref={sectionSubHeaderRef} className='sub-heading'>{props.subDescription}</div>
                <div className='feature-switcher'>
                    <div className='progress-bar-section'>
                        <img className='up-icon' src={upIcon} onClick={upIconClick}></img>
                        <div className='feature-bar'>
                            <div className='feature-progress-bar'/>
                        </div>
                        <img className='down-icon' src={downIcon} onClick={downIconClick}></img>
                    </div>
                    <div className='feature-headings-section'>
                        {props.subMenu.map((item, index) => (
                            <>
                              <div className={`feature-button ${index === currentSubMenuIndex.current ? 'feature-button-selected' : ''}`}>
                                  <div key={index} className={`feature-heading ${index === currentSubMenuIndex.current ? 'feature-selected' : ''}`}>{item.name}</div>
                              </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>               
                    
            <div className='right-section'>
        
            <Spline  className="mobile-3d" scene="https://prod.spline.design/c4Gyp4-hugu5H3xK/scene.splinecode" />
                {/* <div class="image-container">
                    <img className={`phone-screen ${animatePhone ? '' : 'phone-screen-rotate'}`} src={screen1} alt="Screen"></img>
                    <div class="phone-drops-bg"></div>
                </div> */}
                <div ref={featureDescriptionRef} className='feature-description'>{props.subMenu[currentSubMenuIndex.current].description}</div>
                <div className='get-staretd-button'>
                  <div className='btn-content'>Get Started</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FeatureSection;