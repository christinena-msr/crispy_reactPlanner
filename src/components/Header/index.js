import React from "react";
import "./styles.css";

function Header() {
    return (
        <header className="banner">
            <h1 className="title">Daily Planner</h1>
            <p className="description">Create a static schedule asychronous to your calendar</p>
            <h2 className="subtitle">Today is [DOW] [Month, Date, Year]</h2>
        </header>
    );
}

export default Header;