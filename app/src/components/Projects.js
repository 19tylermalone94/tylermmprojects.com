import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div className='projects'>
      <title>Projects</title>
      <Project title="Burger-Baron" description="This is project 1" pictures={["bb_gameplay.jpg"]} />
      <Project title="java-bonsai" description="This is project 2" pictures={["bonsai.png"]} />
      <Project title="Game Jams" description="This is project 3" pictures={["spacekeep.png"]} />
      <Project title="Project Euler" description="This is project 3" pictures={["Leonhard_Euler.jpg"]} />
    </div>
  )
}

export default Projects
