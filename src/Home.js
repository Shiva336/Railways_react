import React from 'react'
import Organs from './Organs.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import description from './description';
import "./Home.css"

function Home() {
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(0);

    const fetchVoices =()=>{
            return new Promise((resolve, reject)=> {
            setInterval(() => {
            let voices=window.speechSynthesis.getVoices();
                if (voices.length !== 0) {
                    resolve(voices);
                    clearInterval();
                }
            }, 40);
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
        const msg = new SpeechSynthesisUtterance();
        msg.voice = selectedVoice;
        msg.text=item.name;
        window.speechSynthesis.speak(msg);
        navigate('/organs', {state:{item: item}});
      }
    });
  }

   
    return (
    <div>
        <div className="container">
        <select  onChange={handleVoiceChange}>
                     <option value={0}>
                        English
                    </option>
                    <option value={189}>
                        Malayalam
                    </option>
            </select>
                <img className="humanbody" src={require('./new.jpg')} alt="Human Anatomy" />
                <div className="box" id="lungs" onTouchStart={handleTouchStart}></div>
                <div className="box" id="brain" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="liver" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="heart" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="kidney" onTouchStart={handleTouchStart}> </div> 
                <div className="box" id="stomach" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="pancreas" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="malerep" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="intestine" onTouchStart={handleTouchStart}> </div>
                <div className="box" id="femrep" onTouchStart={handleTouchStart}> </div>
        </div>
    </div>
  );
}

export default Home