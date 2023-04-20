import React from 'react'
import './pcontainer.css'

const Pcontainer = ({ title, image, text }) => {
  return (
    <div className='portfolio__pcontainer'>
        <div className='portfolio__pcontainer-title'>
            <h1>{title}</h1>
        </div>
        <div className='portfolio__pcontainer-frame'>
            <div className='portfolio__pcontainer-image'>
                <img src={image}/>
            </div>
            <div className='portfolio__pcontainer-text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Pcontainer