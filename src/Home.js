import React from 'react'
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
  
    useEffect(() => {
        const fetchVoices = async () => {
            const voices = window.speechSynthesis.getVoices();
            setVoices(voices);
            setSelectedVoice(voices[0]);
        };
        fetchVoices();
    }, [text]);

    const handleVoiceChange = (e) => {
      setSelectedVoice(voices[e.target.value]);
  };

  let navigate = useNavigate();

  function handleTouchStart(id) {
    navigate('/organs', { state: { prop1: id.target.id } });
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
                <div className="box" id="lungs" onTouchStart={handleTouchStart.bind(1)}></div>
                <div className="box" id="brain" onTouchStart={handleTouchStart.bind(2)}> </div>
                <div className="box" id="liver" onTouchStart={handleTouchStart.bind(3)}> </div>
                <div className="box" id="heart" onTouchStart={handleTouchStart.bind(4)}> </div>
                <div className="box" id="kidney" onTouchStart={handleTouchStart.bind(5)}> </div> 
                <div className="box" id="stomach" onTouchStart={handleTouchStart.bind(6)}> </div>
                <div className="box" id="pancreas" onTouchStart={handleTouchStart.bind(7)}> </div>
                <div className="box" id="malerep" onTouchStart={handleTouchStart.bind(8)}> </div>
                <div className="box" id="intestine" onTouchStart={handleTouchStart.bind(9)}> </div>
                <div className="box" id="femrep" onTouchStart={handleTouchStart.bind(10)}> </div>
        </div>
    </div>
  );
}

export default Home