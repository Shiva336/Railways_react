import React from 'react'
import "./buttons.css"

function buttons() {
  const startSpeak = ()=> {};

  const stopSpeak = ()=> {};
  return (
    <div>
      <span>
          <button className="startSpeak speechButtons" onTouchStart={startSpeak}>Speak</button>
          <button className="stopSpeak speechButtons" onTouchStart={stopSpeak}>Stop</button>
      </span>
    </div>
  )
}

export default buttons
