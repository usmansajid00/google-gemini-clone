import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="menu-icon" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus-icon" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="msg-icon" />
            <p>What is React ?...</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item"></div>
      </div>
    </div>
  );
};

export default Sidebar;
