import React from 'react';
import btnArrow from '../../assert/images/iconArrowRed.png'
import "../../assert/common.css"

function GradientButton(props) {
    return (
        <div className={props.className}>
            <div className='get-started-btn'>
                <div className='btn-content'>
                {props.name}
                    <img className='btn-arrow' src={btnArrow}></img>
                </div>
            </div>
        </div>
    );
}

export default GradientButton;