import React from "react";
// import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "./close-icon.png";

const buttonStyle = {
  position: "absolute",
  top: "2px",
  right: "2px"
};

const handleButtonClick = () => {
  console.log("Close button has been clicked");
};

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
      <button
        style={buttonStyle}
        aria-label="Close"
        onClick={handleButtonClick}
      >
        Button
        <img
          src={closeIcon}
          alt="closeIcon"
        />
      </button>
    </div>
  );
}
