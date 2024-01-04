import React, { useEffect } from 'react';
import '../assert/allFeatures.css'
import data from '../data/allFeatures'
import Spline from '@splinetool/react-spline';

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
                                <div key={subIndex} className='feature-names'>{subHeading.name}</div>
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
                                    <div className='card-heading'>{data[0].subMenu[0].name}</div>
                                    <h1 className='card-description'>{data[0].subMenu[0].description}</h1>
                                    {
                                        data[0].subMenu[0].points.map((point, index) => {
                                            // console.log("point",point);
                                            return (
                                            <div className='points-container'>
                                                 <img className='arrow-symbol'></img>
                                                 <div key={index} className='card-points'>{point}</div>
                                            </div>
                                           
                                            )
                                        })
                                    }
                                   <div className='button-parent'>
                                   <div className='get-started-button'>
                                    get started
                                    </div>
                                   </div>
                                   
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
