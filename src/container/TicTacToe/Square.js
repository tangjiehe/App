import React from 'react';

function Square({ onHandleClick, value }) {
    const getClassName = () => {
        return value ? 'isOccupied' : '';
    }
    return (
        <td className={getClassName()} onClick={onHandleClick}>{value}</td>
    )
}

export default Square;