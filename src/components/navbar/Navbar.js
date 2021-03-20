import React from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faCommentAlt, faChevronDown} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo_container'>
                <p className='beforelogo'></p>
                <h3 className='logo'>Logo</h3>
            </div>
            <div className='links'>
                <p className='link'>Dashboard</p>
                <p className='link'>Find Experts</p>
                <p className='link'>Discussion</p>
            </div>
            <div className='userinfo'>
                <FontAwesomeIcon icon={faBell} className='icon'/>
                <FontAwesomeIcon icon={faCommentAlt} className='icon'/>
                <div >
                    <img className='icon_image' src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80' alt=''/>
                    <FontAwesomeIcon icon={faChevronDown} className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
