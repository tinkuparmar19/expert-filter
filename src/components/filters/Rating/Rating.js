import React from 'react'
import expertData from '../../../experts.json'

function Rating() {
    return (
        <div>
            rating
            {
                expertData.rating.map(data => {
                    return <label><input type='checkbox'/> {data}</label>
                })
            }
        </div>
    )
}

export default Rating
