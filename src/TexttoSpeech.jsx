import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);

    useEffect(() => {
        const fetchVoices = async () => {
            const voices = window.speechSynthesis.getVoices();
            setVoices(voices);
            setSelectedVoice(voices[0]);
        };
        fetchVoices();
    },[text]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleVoiceChange = (e) => {
        console.log(e.target.value)
        setSelectedVoice(voices[e.target.value]);
    };

    const handleSpeak = () => {
        const msg = new SpeechSynthesisUtterance();
        msg.voice = selectedVoice;
        msg.text = text;
        window.speechSynthesis.speak(msg);
    };

    return (
        <div>
            <textarea value={text} onChange={handleTextChange} />
            <select onChange={handleVoiceChange}>
                {voices.map((voice, i) => (
                    <option key={i} value={i}>
                        {voice.name}
                    </option>
                ))}
            </select>
            <button onClick={handleSpeak}>Speak</button>
        </div>
    );
};

export default TextToSpeech;