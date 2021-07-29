import React from "react";

function Tooltip({ max, text }) {
    return (
        <div className="toolFather">
            {text.slice(0, max) + "..."}
        
            <span className="tooltext">{text}</span>
        </div>
    );
}

export default Tooltip;
