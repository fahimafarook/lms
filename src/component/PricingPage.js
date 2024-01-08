import React from 'react';
import "../../src/assert/pricing.css"
import data from "../data/pricing.jsx"
import tickIcon from '../assert/images/darkGreyTick.png';
import GradientButton from './common/GradientButton';

function PricingPage(props) {
    return (
        <div className='pricing-section'>
            <h1 className='pricing-page-header'>Check out our plans</h1>
            <h1 className='pricing-sub-page-header'>simple pricing</h1>
            <div className='pricing-card-section'>
                {
                     data.map((item, index) => (
                        <div key = {index}className='pricing-card-border'>
                            <div className='pricing-card'>
                                <div className='plan-name'>{item.planName}</div>
                                <div className='plan-pricing'>{item.planPrice}</div>
                                <hr className='custom-hr'></hr>
                                <div className='plan-features'>
                                {
                                    item.features.map((feature, subIndex) =>(
                                        <div className='plan-name-parent'>
                                            <img className='pricing-tick-symbol' src={tickIcon}/>
                                            <div key = {subIndex} className='plan-feature'>{feature}</div>
                                        </div>
                                       
                                    ))
                                }
                                 </div>
                               <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <GradientButton className="get-trail-button" arrow={false} name="try 14 days free trail" />
                                </div>
                            </div>
                        </div>
                     ))
                }
            </div>
        </div>
    );
}

export default PricingPage;