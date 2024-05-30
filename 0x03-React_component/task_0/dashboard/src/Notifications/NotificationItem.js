import React from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type, value, html }) => {
    if (html) {
        return (
        <li data-priority={type} dangerouslySetInnerHTML={{ __html: value }} />
        );
    }
    return <li data-priority={type}>{value}</li>;
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    })
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;