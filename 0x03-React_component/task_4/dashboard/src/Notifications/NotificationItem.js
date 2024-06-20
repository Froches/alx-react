import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ id, type, value, html, markAsRead }) => {
    const handleClick = () => {
        markAsRead(id);
    };

    if (html) {
        return (
        <li data-priority={type} dangerouslySetInnerHTML={{ __html: value }} onClick={handleClick} />
        );
    }
    return <li data-priority={type} onClick={handleClick}>{value}</li>;
}

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
};

export default NotificationItem;