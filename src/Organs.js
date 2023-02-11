import React from 'react'
import { useState, useEffect } from 'react';
import description from './description';
import { useLocation } from 'react-router-dom';
import Topbar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar'

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
  return (
  <div>
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
