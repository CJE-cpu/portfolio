import './skills.css'
import React from 'react'
import { html, css, javascript, react, vue, typescript } from '../../assets'

const Skills = () => {
  return (
    <div className='portfolio__skill' id="skill">
      <div className='portfolio__skill-title'>
        <h1>SKILLS</h1>
      </div>
      <div className='portfolio__skill-container'>
        <ul>
          <li><img src={html} alt="html"/></li>
          <li><img src={css} alt="css"/></li>
          <li><img src={javascript} alt="javascript"/></li>
          <li><img src={react} alt="react"/></li>
          <li><img src={vue} alt="vue"/></li>
          <li><img src={typescript} alt="typescript"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Skills