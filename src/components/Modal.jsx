import React from "react";
import PropTypes from "prop-types";

function Modal({ children, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">{children}</div>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
