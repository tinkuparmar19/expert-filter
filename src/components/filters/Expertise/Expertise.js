import React, {useState, useContext} from 'react'
import { userContext } from '../../App'
import './Expertise.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


function Expertise() {
    const [query, setQuery] = useState('')
    const [expertise, setExpertise] = useState([])
    const {dispatch} = useContext(userContext)


    const handleSubmit = (e) => {
        if(e.key === 'Enter' && query !== '') {
            setExpertise(prevState => {
                prevState =  prevState.concat(query)
                dispatch({type: 'DELETE_EXPERTISE', payload: query})
                return prevState
            })
        }
    }

    const handleClick = (e, skill) => {
        e.preventDefault()
        setExpertise(prevState => {
            prevState = prevState.filter(prev => prev !== skill )
            dispatch({type: 'ADD_EXPERTISE', payload: prevState})
            return prevState
        })
    }

    return (
        <div className='expertise'>
            <h3>Expertise</h3>
            <input 
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => handleSubmit(e)}
                placeholder='expertise'
                className='expertise_input'
            />
            <div className='taglist'>
                {
                    expertise && expertise.map(skill => {
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

export default Expertise
