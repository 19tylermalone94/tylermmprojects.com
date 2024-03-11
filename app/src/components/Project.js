import React from 'react'

function Project({ title, description, pictures }) {
  return (
    <div className="Project">
      <h2>{title}</h2>
      <p>{description}</p>
      {pictures.map((picture) => (
        <img src={picture} alt={``} />
      ))}
    </div>
  )
}

export default Project
