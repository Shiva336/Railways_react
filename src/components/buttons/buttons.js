import React from 'react'
import "./buttons.css"

function buttons() {
  return (
    <div>
      <span>
          <button className="startSpeak speechButtons">Speak</button>
          <button className="stopSpeak speechButtons">Stop</button>
      </span>
    </div>
  )
}

export default buttons
