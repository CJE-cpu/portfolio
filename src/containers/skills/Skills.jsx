import './skills.css'
import React from 'react'
import Scontainer from '../../components/scontainer/Scontainer'
import { javascript, react, typescript } from '../../assets'

const Skills = () => {
  return (
    <div className='portfolio__skill' id="skill">
      <div className='portfolio__skill-title'>
        <h1>SKILLS</h1>
      </div>
      <div className='portfolio__skill-container'>
        <Scontainer title="javascript" image={javascript} />
        <Scontainer title="react" image={react} />
        <Scontainer title="typescript" image={typescript} />
        <Scontainer title="typescript" image={typescript} />
        <Scontainer title="typescript" image={typescript} />
        <Scontainer title="typescript" image={typescript} />
        <Scontainer title="typescript" image={typescript} />
      </div>
    </div>
  )
}

export default Skills