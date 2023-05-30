import React from "react";
import PropTypes from 'prop-types'
import "./header.css";

function Header({text, textColor}){

    const headerStyle = {
        color: textColor,
    };

    return (
        <header className="header-section">
            <div className="header-content" style={headerStyle}>
                {text}
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: "Feedback APP",
    textColor: "#0c112c"
}
Header.prototype = {
    text: PropTypes.string
}

export default Header;