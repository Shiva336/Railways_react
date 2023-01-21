import React from 'react'
import Organs from './Organs.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import description from './description';

function Home() {

    const sv = document.getElementById("selectvoice");
    const container2 = document.querySelector("div.container2");
    const humanbody= document.querySelector("img.humanbody");
    const [text, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(0);

    const fetchVoices =()=>{
            return new Promise((resolve, reject)=> {
            setInterval(() => {
            let voices=window.speechSynthesis.getVoices()
                if (voices.length !== 0) {
                    resolve(voices);
                    clearInterval();
                }
            }, 10);
        }
    )
    }
  
    useEffect(() => {
        fetchVoices()
        .then(voices=>{
        setVoices(voices);
        setSelectedVoice(voices[0]);
        }
        )
    }, []);

    const handleVoiceChange = (e) => {
      setSelectedVoice(voices[e.target.value]);
  };

  let navigate = useNavigate();

  function handleTouchStart(id) {
    description.map(item=>{
      if(id.target.id===item.name)
      {
        setText(item.name);
        const msg = new SpeechSynthesisUtterance();
        msg.voice = selectedVoice;
        console.log(selectedVoice);
        msg.text=item.name;
        window.speechSynthesis.speak(msg);
      }
    });
  }

   
    return (
    <div>
        <div className="container">
        <select onChange={handleVoiceChange}>
                     <option value={0}>
                        English
                    </option>
                    <option value={188}>
                        Malayalam
                    </option>
            </select>
                <img className="humanbody" src={require('./new.jpg')} alt="Human Anatomy" />
                <div className="box" id="lungs" onTouchStart={handleTouchStart.bind()}></div>
                <div className="box" id="brain" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="liver" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="heart" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="kidney" onTouchStart={handleTouchStart.bind()}> </div> 
                <div className="box" id="stomach" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="pancreas" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="malerep" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="intestine" onTouchStart={handleTouchStart.bind()}> </div>
                <div className="box" id="femrep" onTouchStart={handleTouchStart.bind()}> </div>
        </div>
    </div>
  );
}

export default Home