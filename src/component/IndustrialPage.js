import React from 'react';
import '../../src/assert/industrial.css'
import IndustryCard from './subComponents/IndustryCard'
import data from '../data/industrialCard'

function IndustrialPage() {
    return (
        <div className='industrial-page'>
            {
                 data.featureSections.map((item, index)=>(
                    <IndustryCard cardData = {item} index = {index}></IndustryCard>
                 ))

                 
            }

            {
                 data.featureSections.map((item, index)=>(
                    <IndustryCard cardData = {item} index = {index}></IndustryCard>
                 ))

                 
            }
            

        </div>
    );
}

export default IndustrialPage;