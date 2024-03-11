import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div>
      <title>Projects</title>
      <Project title="Project 1" description="This is project 1" pictures={["logo192.png"]} />
      <Project title="Project 2" description="This is project 2" pictures={["logo192.png"]} />
      <Project title="Project 3" description="This is project 3" pictures={["logo192.png"]} />
    </div>
  )
}

export default Projects
