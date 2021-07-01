import React, { useState, useEffect } from 'react'

function DateDisplay(props) {
    // let [loaded, setLoaded] = useState(false)
    // props.setTime(props.timeFormatter())
    useEffect(() => {
        // if (!loaded) {
        const timer = setInterval(() => {
            // console.log("heartbeat")
            props.setTime(props.timeFormatter())
        }, 1000)
        // }
        // setLoaded(true)
        return () => clearTimeout(timer)
    }, [props.time])
    return (
        <div>
            <h3>{props.time}</h3>
        </div>
    )
}

export default DateDisplay
