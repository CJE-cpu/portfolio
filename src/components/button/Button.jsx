import React from 'react'
import './button.css'

const Button = ( {text} ) => {
  return (
    <button type='button'>
      {text}
    </button>
  )
}

export default Button