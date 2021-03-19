import React from 'react'
import expertData from '../../../experts.json'

function Languages() {
    return (
        <div>
            languages
            {
                expertData.languages.map(data => {
                    return <label><input type='checkbox'/> {data}</label>
                })
            }
        </div>
    )
}

export default Languages
