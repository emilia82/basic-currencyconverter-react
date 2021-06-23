import "./style.css";
import { useState, useEffect } from "react";

export const Date = () => {
    const [date, setDate] = useState(new Date());
    const todayDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(newDate());
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