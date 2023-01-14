import React from 'react'
import Organs from './Organs';
import { useNavigate } from 'react-router-dom';

function Home() {

    const sv = document.getElementById("selectvoice");
    const container2 = document.querySelector("div.container2");
    const humanbody= document.querySelector("img.humanbody");
    const voiceId = document.getElementById("voiceList");

  var voiceList = document.querySelector('#voiceList');
  var voices = [];
  var synth = window.speechSynthesis;


const description = [
    "The lungs are a pair of spongy, air-filled organs located on either side of the chest (thorax). The trachea (windpipe) conducts inhaled air into the lungs through its tubular branches, called bronchi. ", 
    "A brain is an organ that serves as the center of the nervous system in all vertebrate and most invertebrate animals. It is located in the head, usually close to the sensory organs for senses such as vision.", 
    "The liver is a large, meaty organ that sits on the right side of the belly. Weighing about 3 pounds, the liver is reddish-brown in color and feels rubbery to the touch. Normally you can't feel the liver, because it's protected by the rib cage.",
    "The heart is a muscular organ about the size of a fist, located just behind and slightly left of the breastbone. The heart pumps blood through the network of arteries and veins called the cardiovascular system.", 
    "The kidneys are a pair of bean-shaped organs on either side of your spine, below your ribs and behind your belly. Each kidney is about 4 or 5 inches long, roughly the size of a large fist.",
    "The stomach is a muscular organ located on the left side of the upper abdomen. The stomach receives food from the esophagus. As food reaches the end of the esophagus, it enters the stomach through a muscular valve called the lower esophageal sphincter.",
    "The pancreas is about 6 inches long and sits across the back of the abdomen, behind the stomach. The head of the pancreas is on the right side of the abdomen and is connected to the duodenum.",
    "The male reproductive system is mostly located outside of the body. These external organs include the penis, scrotum and testicles. Internal organs include the vas deferens, prostate and urethra.",
    "The intestines are a long, continuous tube running from the stomach to the anus. Most absorption of nutrients and water happen in the intestines. The intestines include the small intestine, large intestine, and rectum.",
    "The female reproductive organs include several key structures, such as the ovaries, uterus, vagina, and vulva. These organs are involved in fertility, conception, pregnancy, and childbirth.emale reproductive system"
];

  let navigate = useNavigate();

  function handleTouchStart(id) {
    console.log(id);
    <Organs id={id}/>
  }

   
    return (
    <div>
         <div className="container2">
           <span id="selectvoice">Select Voice: </span> <select id="voiceList"></select> 
        </div>
        <div className="container">
                <img className="humanbody" src={require('./new.jpg')} alt="Human Anatomy" />

                <div className="box" id="lungs" onTouchStart={handleTouchStart.bind(1)}> </div>
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