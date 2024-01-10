import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../../assert/FAQ.css"
import data from "../../data/FAQData"

function FAQSection() {

    useEffect(() => {

        gsap.to(".FQA-header", {
            color: "#cccccc",
            y: -10,
            duration: 1,
            scrollTrigger: {
              trigger: ".FQA-header",
              start: "top 60%",
              toggleActions: "play reverse play reverse",
            },
          });
        }
)

    const [activeIndex, setActiveIndex] = useState(0);

    const QAsectionClick = (Currentindex) =>{
        setActiveIndex(Currentindex);
    }

    return (
        <div className='FAQ-section'>
            <div className='FQA-header'>FAQ's</div>
            <div className='FAQ-container'>
                {
                    data.industrialFAQ.map((item, index) => {
                        return (
                            <div key={index} className={`QA-section ${index === activeIndex ? 'active-QA-section' : ''}`} onClick={() => QAsectionClick(index)}>
                                <div data-index={index+1} className={`${index === activeIndex ? 'active-question' : 'FAQ-question '}`}>{item.question}</div>
                                <div className={` ${index === activeIndex ? 'active-answer' : 'FAQ-answer'}`}>{item.answer}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FAQSection;