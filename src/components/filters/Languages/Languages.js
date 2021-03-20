import React, { useContext, useState } from 'react'
import { userContext } from '../../App'
import './Languages.css'

function Languages(props) {
    const {languages} = props
    const [sortLanguage, setSortLanguage] = useState([])
    const {state, dispatch} = useContext(userContext)

    const handleChange = (e, data) => {
        if(e.target.checked) {
            setSortLanguage(prevState => {
                prevState =  prevState.concat(data)
                dispatch({type: 'DELETE_LANGUAGE', payload: data})
                return prevState
            })
        } else {
            setSortLanguage(prevState => {
                prevState = prevState.filter(prev => prev !== data )
                dispatch({type: 'ADD_LANGUAGE', payload: prevState})
                return prevState
            })   
        }
    }

    return (
        <div className='language'>
            <h3>Languages</h3>
            <div className='language_list'>
                {
                    languages.map(data => {
                        return (
                            <label className='language_label'>
                                <input type='checkbox' onChange={e => handleChange(e, data)}/> {data}
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Languages
