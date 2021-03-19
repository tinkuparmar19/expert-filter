import React, {useState} from 'react'

function Expertise() {
    const [query, setQuery] = useState('')
    const [expertise, setExpertise] = useState([])

    const handleSubmit = (e) => {
        if(e.key == 'Enter' && query !== '') {
            setExpertise(prevState => {
                return prevState.concat(query)
            })  
        }
    }

    return (
        <div>
            <input 
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => handleSubmit(e)}
                placeholder='expertise'
            />
            <div>
                {
                    expertise && expertise.map(skill => {
                        return <li>{skill} <span>*</span></li>
                    })
                }
            </div>
        </div>
    )
}

export default Expertise
