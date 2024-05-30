import React from "react";

const NotificationItem = ({ type, value, html }) => {
    if (html) {
        return (
        <li data-priority={type} dangerouslySetInnerHTML={{ __html: value }} />
        );
    }
    return <li data-priority={type}>{value}</li>;
}

export default NotificationItem;