import React from 'react';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    customeStyle = {
        color: '#f5f5f5ab'
    };
    if (isHeader) {
        return (
        <tr style={customeStyle}>
            <th colSpan="2">{textFirstCell}</th>
        </tr>
        );
    } else {
        return (
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
        );
    }
}

export default CourseListRow;