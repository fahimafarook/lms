import React, { useEffect } from 'react';
import '../assert/allFeatures.css'
import data from '../data/allFeatures'

function AllFeatures() {
/*
    let fixedDisplay;

    const handleScroll = () => {
        // console.log(Math.round(fixedDisplay.getBoundingClientRect().top), Math.round((window.innerHeight/2)-(fixedDisplay.getBoundingClientRect().height/2)), (window.innerHeight/2), (fixedDisplay.getBoundingClientRect().height/2));
        // console.log(fixedDisplay.getBoundingClientRect().top == (window.innerHeight/2)-(fixedDisplay.getBoundingClientRect().height/2))

        if(Math.round(fixedDisplay.getBoundingClientRect().top) == Math.round((window.innerHeight/2)-(fixedDisplay.getBoundingClientRect().height/2)))
        console.log("attained========================================================================");
        // fixedDisplay.style.position = "absolute";
        // fixedDisplay.style.width = "50%";
        // fixedDisplay.style.height = "70%";
    };
      

    useEffect(() => {

        fixedDisplay = document.getElementsByClassName("display-container")[0]
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
*/
    return (
        <div>
            <div className='all-features-section'>
                <div className="features-page-heading">Pick the features that you need</div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllFeatures;
