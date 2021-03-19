import React from 'react'
import './Expert.css'

function Expert(props) {
    const data = props.data
    return (
        <div className='expert'>
            <div className='expert_info'>
                <img src={data.photo} className='expert_photo' alt='man'/>
                <p>Price: {data.price}</p>
                <p>{data.rating} ({data.reviews})</p>
            </div>
            <div className='expert_bio'>
                <div className='expert_detail'>
                    <div className='expert_name_about'>
                        <h3>{data.name}</h3>
                        <p>{data.about}</p>
                    </div>
                    <div className='view_profile'>
                        <i>icon</i>
                        <i>view profile</i>
                    </div>
                </div>
                <hr />
                <div className='expert_description'>
                    <div className='expert_availability'>
                        <p>{data.info[0]}</p>
                        <p>{data.info[1]}</p>
                        <p>{data.info[2]}</p>
                    </div>
                    <p>{data.description}</p> 
                    <div className='expert_skills'>
                        <p>{data.skills[0]}</p>
                        <p>{data.skills[1]}</p>
                        <p>{data.skills[2]}</p>
                        <p>{data.skills[3]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert
