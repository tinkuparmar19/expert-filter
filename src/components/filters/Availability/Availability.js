import React from 'react'
import './Availability.css'

function Availability(props) {
    const {availability} = props
    return (
        <div className='availability'>
            <h3>Availability</h3>
            <div className='availability_list'>
                {
                    availability.map(data => {
                        return <label className='availability_label'><input type='checkbox'/> {data}</label>
                    })
                }
            </div>
        </div>
    )
}

export default Availability
