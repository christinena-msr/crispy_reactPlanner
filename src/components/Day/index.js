import React from "react";
import "./styles.css";

function Day(props) {
    return (
        <div className="day">
            {props.children}
        </div>
    );
}

export default Day;