import React, { useContext, useState } from 'react'
import { userContext } from '../../App'
import './Price.css'

function Price(props) {
    const {price} = props
    const [sortPrice, setSortPrice] = useState([])
    const {state, dispatch} = useContext(userContext)

    const handleChange = (e, data) => {
        if(e.target.checked) {
            setSortPrice(prevState => {
                prevState =  prevState.concat(data)
                dispatch({type: 'DELETE_PRICE', payload: data})
                return prevState
            })
        } else {
            setSortPrice(prevState => {
                prevState = prevState.filter(prev => prev !== data )
                dispatch({type: 'ADD_PRICE', payload: prevState})
                return prevState
            })   
        }
    }

    return (
        <div className='price'>
            <h3>Price</h3>
            <div className='price_list'>
                {
                    price.map(data => {
                        return (
                            <label className='price_label'>
                                <input type='checkbox' onChange={e => handleChange(e, data)}/> {data}
                            </label>
                        )
                    })
                }
            </div>
        </div>
)
}

export default Price
