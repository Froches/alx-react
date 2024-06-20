import React from 'react';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader) {
        return (
        <tr>
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