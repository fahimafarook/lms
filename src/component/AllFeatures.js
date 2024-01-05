import React, { useEffect } from 'react';
import '../assert/allFeatures.css'
import data from '../data/allFeatures'
import Spline from '@splinetool/react-spline';
import gradientBg from '../assert/images/gradBg.png';
import tickIcon from '../assert/images/iconTickColor.png';
import btnArrow from '../assert/images/iconArrowRed.png';
import notepadIcon from '../assert/images/iconNotepad.png';
import GradientButton from './common/GradientButton';

function AllFeatures() {

    const catorgryIndex = 0;
    const selectedFeatureIndex= 0;
/*
    let fixedDisplay;
    let allFeatureSection;

    const handleScroll = () => {
        // console.log(Math.round(fixedDisplay.getBoundingClientRect().top), Math.round((window.innerHeight/2)-(fixedDisplay.getBoundingClientRect().height/2)), (window.innerHeight/2), (fixedDisplay.getBoundingClientRect().height/2));
        // console.log(fixedDisplay.getBoundingClientRect().top == (window.innerHeight/2)-(fixedDisplay.getBoundingClientRect().height/2))

        // if(Math.round(fixedDisplay.getBoundingClientRect().top) <= Math.round((window.innerHeight/2)-(fixedDisplay.getBoundingClientRect().height/2))){
        //     console.log("attained========================================================================");
            
        // }
        if(allFeatureSection.getBoundingClientRect().top < (window.innerHeight / 15)) {
            fixedDisplay.style.position = "fixed";
            fixedDisplay.style.top = "15vh";
            fixedDisplay.style.right = "5vw";
            fixedDisplay.style.width = "50vw";
            fixedDisplay.style.height = "70vh";
        }
        else{
            fixedDisplay.style.position = "relative";
        }

    };
      

    useEffect(() => {

        fixedDisplay = document.getElementsByClassName("display-container")[0];
        allFeatureSection = document.getElementsByClassName("features-left-section")[0];
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
*/
    return (
        <div>
{/* 
<div class="gradient-pricing-holder" style={{opacity: "1", transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>
                        <div class="card-item pricing-card" style={{opacity: "1"}}>
                            <div class="card-item-content pricing-item-content">
                                <div class="pricing-item-content-2">
                                    <div class="pricing-v3-title-2">Pro</div>
                                    <div class="pricing-main-content-2">
                                        <div class="pricing-v3-price-2">
                                            <sup class="superscript">$</sup>
                                            50
                                        </div>
                                        <div class="pricing-v3-price-type-2">per user / month<br/>billed annually<br/>or €23.79 monthly</div>
                                    </div>
                                    <div class="pricing-v3-description-2">For Recruiters that want to provide a world-class experience for every candidate, without all the admin.</div>
                                </div>
                                <div class="feature-button-holder pricing">
                                    <a href="#" class="features-explore-button pricing w-inline-block">
                                        <div>Try it for FREE</div>
                                    </a>
                                    <div class="features-button-gradinet" style={{opacity: "0"}}></div>
                                </div>
                                <div class="gradient-bg-holder" style={{background: "rgb(0,0,0)"}}>
                                    <img src="https://assets-global.website-files.com/65687e20f7502a42d87cc376/656df1b916fe3ad2ab1f5cc6_Pricing%20BG%20Blury%20Holder.webp" loading="lazy" sizes="100vw" srcset="https://assets-global.website-files.com/65687e20f7502a42d87cc376/656df1b916fe3ad2ab1f5cc6_Pricing%20BG%20Blury%20Holder-p-500.png 500w, https://assets-global.website-files.com/65687e20f7502a42d87cc376/656df1b916fe3ad2ab1f5cc6_Pricing%20BG%20Blury%20Holder.webp 742w" alt="SaaS Webflow Template - Oman- Created by Wedoflow.com and Azwedo.com" class="image"></img>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    
            <div className='all-features-section'>
                <div className="features-page-heading">Check on the features you need</div>
                <div className='all-features'>
                    <div className='features-left-section'>
                    {
                        data.map((feature, index) => (
                            <div key={index} className='feature-list-container'>
                            {/* <div className='feature-heading-name-shadow'>{feature.name}</div> */}
                            <div className='feature-heading-name'>{feature.name}</div>
                            <div className='sub-heading-container'>
                            {
                                feature.subMenu.map((subHeading, subIndex) => (
                                <div key={subIndex} className='feature-names'>
                                    <img className='feature-name-icon' src={notepadIcon}></img>
                                    {subHeading.name}
                                </div>
                                )) 
                            }
                            </div>
                        
                            </div>
                        ))
                    }   
                    </div>
                    
                    <div className='features-right-section'>
                        <div className='display-container-border'>
                            <div className='display-container'>
                                <div className='card-left-section'>
                                    <div className='card-header-container'>
                                        <div className='card-header-icons'></div>
                                        <div className='card-heading'>{data[0].subMenu[0].name}</div>
                                    </div>
                                    
                                    <h1 className='card-description'>{data[0].subMenu[0].description}</h1>
                                    {
                                        data[0].subMenu[0].points.map((point, index) => {
                                            return (
                                            <div key = {index} className='points-container'>
                                               <img className='arrow-symbol' src={tickIcon}/>
                                                 <div key={index} className='card-points'>{point}</div>
                                            </div>
                                           
                                            )
                                        })
                                    }

                                    <GradientButton name ="Get Started" className = "card-get-started-btn"/>
                                </div>

                                <div className='card-right-section'>
                                     <div className='card-phone-image'>
                                        <Spline  className="card-mobile-3d" scene="https://prod.spline.design/c4Gyp4-hugu5H3xK/scene.splinecode" />
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllFeatures;
