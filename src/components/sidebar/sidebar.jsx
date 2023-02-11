import "./sidebar.css";

export default function Sidebar(props) {
  console.log(props);
  const name = ["Lungs", "Brain", "Liver", "Heart", "Kidney", "Stomach", "Pancreas", "Male Reproductive Organ", "Intestine", "Female Reprodutive Organ" ]
  return (
    <div className="sidebar">
      <div className="sidebarHead">
        <h1>{name[props.item.id - 1]}</h1>
      </div>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText"><h2>Overview</h2></span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText"><h2>Diseases</h2></span>
          </li>
        </ul>
      </div>
    </div>
  );
}