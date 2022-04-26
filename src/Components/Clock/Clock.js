import React, { useEffect, useState } from "react";

function Clock() {

    const time = new Date();
    const currentTime = time.toLocaleTimeString();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

  
    return (
        <h1>{currentTime}</h1>
    )
}

export default Clock;