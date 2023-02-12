import React,{useState} from 'react';
import "./Buttons.css"

function Buttons(props) {
  console.log(props.item)
  const [stop,setStop]=useState(false);
  
  const startSpeak = ()=> {
    speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance();
    msg.text=props.item;
    window.speechSynthesis.speak(msg);

  };

  const stopSpeak = ()=> {
        speechSynthesis.pause();
        setStop(prev=>!prev);
  };

  const continueSpeak = ()=>{
        speechSynthesis.resume();
        setStop(prev=>!prev);
  }
  return (
    <div>
      <span>
          <button className="speechButtons" id="startSpeak" onTouchStart={startSpeak}>Restart</button>
          {!stop&&<button className="speechButtons"  id="stopSpeak" onTouchStart={stopSpeak}>Stop</button>}
          {stop&&<button className="speechButtons"  id="continueSpeak" onTouchStart={continueSpeak}>Continue</button>}
      </span>
    </div>
  )
}

export default Buttons;
