import React from 'react'
import '../style/Message.css'

function Message(props) {
    return (
        <div id="message">
            <span><h2>{props.message}</h2></span>
        </div>
    )
}

export default Message
