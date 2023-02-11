import React from 'react'
import { useState, useEffect } from 'react';
import description from './description';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar'
import "./Organs.css"

function Organs(props) {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(0);
  const {state} = useLocation();

  console.log(state);
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
        <img className="organImage" src={images[state.item.id-1]} alt="" />
      </div>
  </div>
);
}

export default Organs;
