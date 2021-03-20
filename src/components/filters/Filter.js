import React from 'react'
import Availability from './Availability/Availability'
import Expertise from './Expertise/Expertise'
import FocusArea from './FocusArea/FocusArea'
import Languages from './Languages/Languages'
import Price from './Price/Price'
import Rating from './Rating/Rating'
import expertData from '../../experts.json'
import './Filter.css'

function Filter() {
    return (
        <div className='filter'>
            <h3 className='filter_header'>Filter</h3>
            <div className='filterlist'>
                <Expertise />
                <FocusArea />
                <Rating rating={expertData.rating}/>
                <Price price={expertData.price}/>
                <Availability availability={expertData.availability}/>
                <Languages languages={expertData.languages}/>
            </div>
        </div>
    )
}

export default Filter
