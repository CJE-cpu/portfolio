import './projects.css'
import React from 'react'
import Pcontainer from '../../components/pcontainer/Pcontainer'
import { project1, project2, project3 } from '../../assets'

const Projects = () => {
  return (
    <div className='portfolio__project' id="project">
      <div className='portfolio__project-title'>
        <h1>PROJECTS</h1>
      </div>
      <div className='portfolio__project-container'>
        <Pcontainer title="gpt3" image={project1} text="react를 사용하여 만든 gpt3 웹사이트" />
        <Pcontainer title="Modern Restaurant" image={project2} text="react를 사용하여 만든 레스토랑 웹사이트" />
        <Pcontainer title="project1" image={project3} text="vite와 react를 사용하여 만든 은행 웹사이트" />
      </div>
    </div>
  )
}

export default Projects