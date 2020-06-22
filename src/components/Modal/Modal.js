import React from 'react';
import './Modal.scss';

function Modal({ isOpen, childComponent }) {

    function getClassName() {
        return isOpen && 'isOpen';
    }
    return (
        <div id="modal" className={getClassName()}>
            {isOpen && childComponent}
        </div>
    )
}

export default Modal;