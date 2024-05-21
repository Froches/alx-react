import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

const buttonStyle = {
  color: "#3a3a3a",
  fontWeight: "bold",
  background: "none",
  border: "none",
  fontSize: "15px",
  position: "absolute",
  top: "2px",
  right: "2px",
  cursor: "pointer"
};

const handleButtonClick = () => {
  console.log("Close button has been clicked");
};

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={buttonStyle}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        <img
          src={closeIcon}
          alt="closeIcon"
          width="10px"
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="urgent">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
      
    </div>
  );
}

export default Notifications;