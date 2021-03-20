import React, {useContext, useState} from 'react'
import './Rating.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../App'

function Rating(props) {
    const {rating} = props
    const [sortRating, setSortRating] = useState([])
    const {dispatch} = useContext(userContext)

    console.log(sortRating)
    const handleChange = (e, data) => {
        if(e.target.checked) {
            setSortRating(prevState => {
                prevState =  prevState.concat(data)
                dispatch({type: 'DELETE_RATING', payload: Math.max(prevState)})
                return prevState
            })
        } else {
            setSortRating(prevState => {
                prevState = prevState.filter(prev => prev !== data )
                dispatch({type: 'ADD_RATING', payload: Math.max(prevState)})
                return prevState
            })   
        }
    }

    return (
        <div className='filter_rating'>
            <h3>Rating</h3>
            <div className='rating_checkbox'>
                {
                    rating.map(data => {
                        return (
                            <label className='start_list_container'>
                                <input type='checkbox' onChange={e => handleChange(e, data)}/>
                                <div className='star_list'>
                                    {
                                        [...Array(data)].map(item => {
                                            return <FontAwesomeIcon icon={faStar} className='star_icon'/>
                                        })
                                        
                                    }
                                </div>
                            </label>
                        )     
                    })
                }
            </div>
        </div>
    )
}

export default Rating
