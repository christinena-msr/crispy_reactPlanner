import React from "react";
import Day from "../Day";

function Week() {
    const days = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <div className="week">
            {days.map(day => 
                <Day key={day}>{day}</Day>)}
        </div>
    );
}

export default Week;