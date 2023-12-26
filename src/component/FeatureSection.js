import {React, useState, useRef} from 'react';
import "../assert/featureSection.css"
import data from '../data/featureDetails';
import screen1 from '../assert/images/phone1.png';
import upIcon from '../assert/images/upArrow.png';
import downIcon from '../assert/images/downArrow.png';
import screen2 from '../assert/images/phone2.png';
import phoneBg from '../assert/images/phone-bg.png';
import icon1 from '../assert/images/icon1.png';
import icon2 from '../assert/images/icon2.png';
import icon3 from '../assert/images/icon3.png';
import icon4 from '../assert/images/icon4.png';
import icon5 from '../assert/images/icon5.png';


function FeatureSection() {

    const [updownArrow, setUpDownArrow] = useState(false);
    const currentSubMenuIndex = useRef(0);

    const phoneScreenElement = document.querySelector('.phone-screen');

    const downIconClick= () => {
        setUpDownArrow(!updownArrow);
        currentSubMenuIndex.current = currentSubMenuIndex.current + 1;
    }

    const upIconClick = () =>{
        setUpDownArrow(!updownArrow);
        currentSubMenuIndex.current = currentSubMenuIndex.current - 1;
    }
    

    return (
        <div className='feature-section'>
            <div className='left-section'>
                    <div>
                        <div className='section-header'>Calling features that give you wings</div>
                        <div className='sub-heading'>Fast, accurate calling, complete tracking</div>
                    </div>
                    <div className='feature-switcher'>
                        <div className='progress-bar-section'>
                            <img className='up-icon' src={upIcon} onClick={upIconClick}></img>
                            <div className='feature-bar'></div>
                            <img className='down-icon' src={downIcon} onClick={downIconClick}></img>
                        </div>
                        <div className='feature-headings-section'>
                            {data[0].subMenu.map((item, index) => (
                                <div key={index} className={`feature-heading ${index === currentSubMenuIndex.current ? 'feature-selected' : ''}`}>
                                {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>               
                    
                <div className='right-section'>
                    <img className='phone-screen' src={screen1} alt="Screen" />
                    <div className='feature-description'>{data[0].subMenu[currentSubMenuIndex.current].description}</div>
                    <div className='get-staretd-button'>Get Started</div>
                </div>
        </div>
    );
}

export default FeatureSection;