import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState("4 Mar 2024");
    const [currentDate, setCurrentDate] = useState(inputDate);

    useEffect(() => {
        const changingDate = new Date(inputDate);
        setInterval(() => {
            const currentDate = new Date();
            const totalSeconds = (changingDate - currentDate) / 1000;
            setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
            setHours(Math.floor(totalSeconds / 3600) % 24);
            setMinutes(Math.floor(totalSeconds / 60) % 60);
            setSeconds(Math.floor(totalSeconds % 60));
        }, 1000)

    }, [currentDate]);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className="countdown__container">
            <div className="countdown__values">
                <div className="countdown__value">
                    <p className="countdown__text">{days}</p>
                    <span>days</span>
                </div>
                <div className="countdown__value">
                    <p className="countdown__text">{hours}</p>
                    <span>hours</span>
                </div>
                <div className="countdown__value">
                    <p className="countdown__text">{minutes}</p>
                    <span>mins</span>
                </div>
                <div className="countdown__value">
                    <p className="countdown__text">{seconds}</p>
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown