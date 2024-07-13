import React, { Component } from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
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

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        { id: 1, content: 'New course available', priority: 'urgent' },
        { id: 2, content: 'New resume available', priority: 'urgent' },
        { id: 3, content: getLatestNotification(), priority: 'urgent', html: true }
      ]
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    // Example of updating notifications dynamically (could be based on props)
    // Replace with actual logic to fetch notifications
    setTimeout(() => {
      this.setState({
        notifications: [
          ...this.state.notifications,
          { id: 4, content: 'New notification', priority: 'urgent' }
        ]
      });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.notifications.length > this.state.notifications.length;
  }

  handleButtonClick() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer } = this.props;
    const { notifications } = this.state;

    return (
      <>
        <div className="menuItem">
          Your notifications
        </div>
        {displayDrawer && <div className="Notifications">
          <button
            style={buttonStyle}
            aria-label="Close"
            onClick={this.handleButtonClick}
          >
            <img
              src={closeIcon}
              alt="closeIcon"
              width="10px"
            />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                content={notification.content}
                markAsRead={this.markAsRead}
                html={notification.html}
              />
            ))}
          </ul>
        </div>}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
