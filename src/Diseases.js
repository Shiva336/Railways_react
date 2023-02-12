import React from 'react'
import { useLocation } from 'react-router-dom';
import description from './description';

function Diseases(props) {
    const {state} = useLocation(); 
    const id = state.item.id;
    const disease = state.item.disease[0];
    const name = ""
    return (
    <div>
      <div className="intro">
        
      </div>
    </div>
  )
}

export default Diseases
