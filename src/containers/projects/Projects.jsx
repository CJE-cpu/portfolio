import './projects.css'
import React from 'react'
import Pcontainer from '../../components/pcontainer/Pcontainer'
import css from '../../assets/css.png'

const Projects = () => {
  return (
    <div className='portfolio__project' id="project">
      <div className='portfolio__project-title'>
        <h1>PROJECTS</h1>
      </div>
      <div className='portfolio__project-container'>
        <Pcontainer title="project1" image={css} text="project1" />
      </div>
    </div>
  )
}

export default Projects