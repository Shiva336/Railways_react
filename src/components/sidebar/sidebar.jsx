import "./sidebar.css";
import {useState} from "react";

export default function Sidebar(props) {
  const [downover,setDownOver]=useState(false);
  const [downdis, setDownDis] = useState(false);
    function changeover(){
    console.log(props);
    setDownOver(prev=>!prev);
  }
  function changedis(){
    setDownDis(prev=>!prev);
  }
  const name = ["Lungs", "Brain", "Liver", "Heart", "Kidney", "Stomach", "Pancreas", "Male Reproductive Organ", "Intestine", "Female Reprodutive Organ" ]
  return (
    <div className="sidebar">
      <div className="sidebarHead">
        <h1>{name[props.item.id - 1]}</h1>
      </div>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText" id="overview">
              <div className={downover?"arrow-right":"arrow-down"} onClick={changeover}></div><h2>Overview</h2></span>
          </li>
          <li className="sidebarListItem">
          <span className="sidebarListItemText"><div className={downdis ? "arrow-right" : "arrow-down"} onClick={changedis}></div><h2>Diseases</h2></span>
            {!downdis&&<ul>
              {props.item.diseases.map((disease)=>{
                return(<li key={disease.name}>{disease.name}</li>)
              })}
            </ul>}
          </li>
        </ul>
      </div>
    </div>
  );
}