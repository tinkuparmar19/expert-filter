import React, { useContext } from 'react'
import { userContext } from '../App'
import Expert from './Expert/Expert'
import './ExpertList.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

function ExpertList() {
    const {state, dispatch} = useContext(userContext)
    return (
        <div className='expertlist'>
            <p className='match'>
                <h3>Featured Experts</h3>
                <p className='match_expert'>
                    <h4>Best Match</h4>
                    <FontAwesomeIcon icon={faChevronDown} className='icon'/>
                </p>
            </p>
            <div>
                {
                    state.map(data => {
                        return <Expert key={data.name} data={data}/>
                    })
                }
            </div>
        </div>
    )
}

export default ExpertList
