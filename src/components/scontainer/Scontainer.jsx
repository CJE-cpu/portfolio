import React from 'react'
import './scontainer.css'

const Scontainer = ({ title, image}) => {
  return (
    <div className='portfolio__scontainer'>
        <div className='portfolio__scontainer-title'>
            <h1>{title}</h1>
        </div>
        <div className='portfolio__scontainer-frame'>
            <div className='portfolio__scontainer-image'>
                <img src={image}/>
            </div>
        </div>
    </div>
  )
}

export default Scontainer