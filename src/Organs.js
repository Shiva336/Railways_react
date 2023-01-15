import React from 'react'
import { useState, useEffect } from 'react';
import description from './description';
import { useLocation } from 'react-router-dom';
import Topbar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar'

function Organs() {
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
  }, []);

  const handleVoiceChange = (e) => {
    setSelectedVoice(voices[e.target.value]);
};

const location = useLocation();
const id = location.state.prop1;
let textvalue = "";
function getOrganDetails(id) {
  description.map(item=>{
    if(id===item.name)
    {
      textvalue = item.name;
      return;
    }
    });
}

// getOrganDetails(id);
// setText(textvalue);

      // const msg = new SpeechSynthesisUtterance();
      // msg.voice = selectedVoice;
      // msg.text=item.description;
      // console.log(msg);
      // window.speechSynthesis.speak(msg); 
  return (
  <div>
      {/* <div className="container">
      <select onChange={handleVoiceChange}>
                   <option value={0}>
                      English
                  </option>
                  <option value={188}>
                      Malayalam
                  </option>
          </select>
      </div> */}
      <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  </div>
);
}

export default Organs;
