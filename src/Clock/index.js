import "./style.css";
import { useState, useEffect } from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());
    const todayDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"

    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    return (
        <p className="date">
            Dzisiejsza data: {todayDate}, {date.toLocaleTimeString()}
        </p>
    );
};

export default Clock;