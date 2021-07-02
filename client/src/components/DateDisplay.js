import React, { useEffect } from 'react'

function DateDisplay(props) {
    useEffect(() => {
        const timer = setInterval(() => {
            props.setTime(props.timeFormatter())
        }, 1000)
        return () => clearTimeout(timer)
    }, [props.time])
    return (
        <div id="timeDisplay">
            <h3>{props.time}</h3>
        </div>
    )
}

export default DateDisplay
