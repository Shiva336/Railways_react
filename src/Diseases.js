import React from 'react'
import { useLocation } from 'react-router-dom';
import description from './description';

function Diseases(props) {
    const {state} = useLocation(); 
    console.log(state);
    const name = ""
    return (
    <div>
      <div className="intro">
        
      </div>
    </div>
  )
}

export default Diseases
