import React from 'react'
import './Expert.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar, faHeart, faStopwatch, faMapMarkedAlt, faLanguage} from '@fortawesome/free-solid-svg-icons'

function Expert(props) {
    const data = props.data
    return (
        <div className='expert'>
            <div className='expert_info'>
                <img src={data.photo} className='expert_photo' alt='man'/>
                <span>Price: <span className='price_color'>{data.price}</span></span>
                <span className='review'>
                    <FontAwesomeIcon icon={faStar} className='icon'/>
                    <span className='rating'>{data.rating}</span> 
                    <span>({data.reviews})</span>
                </span>
            </div>
            <div className='expert_bio'>
                <div className='expert_detail'>
                    <div className='expert_name_about'>
                        <h3>{data.name}</h3>
                        <span>{data.about}</span>
                    </div>
                    <div className='view_profile'>
                        <FontAwesomeIcon icon={faHeart} className='icon'/>
                        <p className='profile'>view profile</p>
                    </div>
                </div>
                <div className='expert_description'>
                    <div className='expert_availability'>
                       <p className='available'><FontAwesomeIcon icon={faStopwatch} className='icon'/> <span>{data.info[0]}</span></p>
                       <p className='available'><FontAwesomeIcon icon={faMapMarkedAlt} className='icon'/> <span>{data.info[1]}</span></p>
                       <p className='available'><FontAwesomeIcon icon={faLanguage} className='icon'/> <span>{data.info[2]}</span></p>
                    </div>
                    <p className='description'>{data.description}</p> 
                    <div className='expert_skills'>
                        {
                            data.skills.map(skill => {
                                return <p className='skill'>{skill}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
