import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from "prop-types";

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

function Notifications({ displayDrawer=false, listNotifications=[] }) {
  if (listNotifications.length === 0) {
    return <div>No new notifications for now</div>
  }
  return (
    <>
    <div className="menuItem">
        Your notifications
      </div>
    {displayDrawer && <div className="Notifications">
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

        {listNotifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
          />
        ))};
      </ul>
      
    </div>}
    </>
  );
}


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;