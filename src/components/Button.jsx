import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick, type = "button" }) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit"]),
};

export default Button;
