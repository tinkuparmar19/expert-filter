import React from 'react'
import expertData from '../../../experts.json'

function Availability() {
    return (
        <div>
            {
                expertData.availability.map(data => {
                    return <label><input type='checkbox'/> {data}</label>
                })
            }
        </div>
    )
}

export default Availability
