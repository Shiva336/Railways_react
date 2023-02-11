import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHead">
        ORGANS
      </div>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Overview</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Diseases</span>
          </li>
        </ul>
      </div>
    </div>
  );
}