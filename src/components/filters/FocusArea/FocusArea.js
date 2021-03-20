import React, {useState, useContext} from 'react'
import '../Expertise/Expertise.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


function FocusArea() {
    const [query, setQuery] = useState('')
    const [focus, setFocus] = useState([])


    const handleSubmit = (e) => {
        if(e.key == 'Enter' && query !== '') {
            setFocus(prevState => {
                prevState =  prevState.concat(query)
                return prevState
            })
        }
    }

    const handleClick = (e, skill) => {
        e.preventDefault()
        setFocus(prevState => {
            prevState = prevState.filter(prev => prev !== skill )
            return prevState
        })
    }

    return (
        <div className='expertise'>
            <h3>FocusArea</h3>
            <input 
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => handleSubmit(e)}
                placeholder='focus area'
                className='expertise_input'
            />
            <div className='taglist'>
                {
                    focus && focus.map(skill => {
                        return (
                                <span key={skill} className='tag'>
                                    <span className='skill_tag'>{skill}</span> 
                                    <FontAwesomeIcon icon={faTimes} className='tag_icon' onMouseDown={e => handleClick(e, skill)}/>
                                </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FocusArea
