import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import description from '../Description/description';
import Sidebar from '../../components/sidebar/sidebar';
import "./Diseases.css"

function Diseases(props) {
    const {state} = useLocation(); 
    const disease = state.disease;
    console.log(disease);
    return (
    <div className='diseaseContainer'>
      <div>
        <Sidebar item = {state.item}/>
      </div>
      <div className="diseaseDetails">
        <h1 className='heading'>{disease.name}</h1>
        <div className="description">
          <p className="descriptionText diseaseText">{disease.desc}</p>
        </div>

        <div className="symptoms">
          <h1 className='heading'>Symptoms</h1>
          <p className="symptomText diseaseText">{disease.symptoms}</p>
        </div>

        <div className="symptoms">
          <h1 className='heading'>Treatments</h1>
          <p className="treatmentText diseaseText">{disease.treatments}</p>
        </div>
      </div>
    </div>
  )
}

export default Diseases
