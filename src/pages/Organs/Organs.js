import React from 'react'
import { useState, useEffect } from 'react';
import description from '../Description/description';
import { useLocation, useNavigate } from 'react-router-dom';
<<<<<<< HEAD:src/Organs.js
import Sidebar from './components/sidebar/Sidebar'
import "./Organs.css"
import Buttons from './components/buttons/Buttons';
=======
import Sidebar from '../../components/sidebar/sidebar'
import Buttons from '../../components/buttons/buttons';
import "./Organs.css"
>>>>>>> a03da62fbceaa4111d2d531063b8fe6a6dedc247:src/pages/Organs/Organs.js

function Organs(props) {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(0);
  const {state} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
      const fetchVoices = async () => {
          const voices = window.speechSynthesis.getVoices();
          setVoices(voices);
          setSelectedVoice(voices[0]);
      };
      fetchVoices();
  }, []);

  const handleVoiceChange = (e) => {
    setSelectedVoice(voices[e.target.value]);
};

const handleBackButton = ()=> {
  window.speechSynthesis.cancel();
  navigate("/");
}

const images = [
  "/images/lungs.png","/images/brain.jpg","/images/liver.png","/images/heart.jpg","/images/kidney.jpg",
  "/images/stomach.jpg","/images/pancreas.jpg","/images/penis.jpg","/images/intestine.jpg","/images/vagina.png"
];
  return (
  <div className='organContainer'>
      <div>
        <Sidebar item = {state.item}/>
      </div>

      <div className="organBody">
        <button className="backButton" onTouchStart={handleBackButton}>Back</button>
        <img className="organImage" src={images[state.item.id-1]} alt="" />
        <br></br>
        <br></br>
        <Buttons item={state.item.description}/>
      </div>
  </div>
);
}

export default Organs;
