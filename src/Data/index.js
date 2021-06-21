import "./style.css";
import { useState, useEffect } from "react";

export const ShowDate = () => {
    const [counter, setTime] = useState(0);
    const newDate = new Date();
    const todayDate = newDate.toLocaleDateString( {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(previousCount => previousCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    return (
        <p className="date">
            Dzisiejsza data {todayDate}, {newDate.toLocaleTimeString()}
        </p>
    );
};