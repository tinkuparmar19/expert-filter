import React from 'react'
import expertData from '../../experts.json'
import Expert from './Expert/Expert'
import './ExpertList.css'

function ExpertList() {
    return (
        <div className='expertlist'>
            {
                expertData.experts.map(data => {
                    return <Expert key={data.name} data={data}/>
                })
            }
        </div>
    )
}

export default ExpertList
