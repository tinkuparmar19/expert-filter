import React from 'react'
import Availability from './Availability/Availability'
import Expertise from './Expertise/Expertise'
import FocusArea from './FocusArea/FocusArea'
import Languages from './Languages/Languages'
import Price from './Price/Price'
import Rating from './Rating/Rating'

function Filter() {
    return (
        <div className='filter'>
            <Expertise />
            <FocusArea />
            <Rating />
            <Price />
            <Availability />
            <Languages />
        </div>
    )
}

export default Filter
