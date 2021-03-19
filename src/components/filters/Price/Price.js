import React from 'react'
import expertData from '../../../experts.json'

function Price() {
    return (
        <div>
            price
            {
                expertData.price.map(data => {
                    return <label><input type='checkbox'/> {data}</label>
                })
            }
        </div>
    )
}

export default Price
