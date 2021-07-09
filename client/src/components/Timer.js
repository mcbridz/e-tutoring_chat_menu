import React, { useState, useEffect } from 'react'
import '../style/Timer.css'

function Timer(props) {
    let [timer, setTimer] = useState(0)
    let [timerRunning, setTimerRunning] = useState(false)
    let [absoluteTime, setAbsoluteTime] = useState(0)
    const startTimer = () => {
        if (timerRunning) {
            setTimerRunning(false)
        } else if (!timerRunning && timer !== 0) {
            setTimerRunning(true)
        } else {
            let newDate = new Date()
            //makes exipration time in absolute terms from midnight in seconds
            let expirationTime = newDate.getHours() * 3600 + newDate.getMinutes() * 60 + newDate.getSeconds() + 1200
            setAbsoluteTime(expirationTime)
            setTimer(1200)
            setTimerRunning(true)
        }
    }
    const reset = () => {
        setTimer(0)
        setTimerRunning(false)
    }
    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (!timerRunning || timer === 0) {
                console.log("timerRunning: " + timerRunning)
                console.log("timer: " + timer)
                console.log("doing nothing")
                document.body.style.backgroundColor = "powderblue"
                return
            } else {
                console.log("reducing timer")
                let newDate = new Date()
                let currentTime = newDate.getHours() * 3600 + newDate.getMinutes() * 60 + newDate.getSeconds()
                setTimer(absoluteTime - currentTime)
                if (timer < 300) {
                    document.body.style.backgroundColor = "red"
                } else if (timer < 600) {
                    document.body.style.backgroundColor = "yellow"
                } else {
                    document.body.style.backgroundColor = "green"
                }
            }
        }, 500)
        return () => clearInterval(timerInterval)
    }, [timer, timerRunning])
    return (
        <div id="timerContainer">
            <div id="startResetTimer">
                <button onClick={() => startTimer()}>{(!timerRunning) ? "Start" : "Stop"}</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
            <h3>{`${Math.floor(timer / 60)}${(!(timer % 2)) ? ':' : ' '}${(timer % 60 < 10) ? `0${timer % 60}` : `${timer % 60}`}`}</h3>
        </div>
    )
}

export default Timer
