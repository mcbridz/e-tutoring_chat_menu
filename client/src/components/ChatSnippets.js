import React, { useState, useEffect } from 'react'
import '../style/ChatSnippets.css'

function ChatSnippets() {
    let [name, setName] = useState('')
    let [numStudents, setNumStudents] = useState(0)
    let [displayWaitingList, setDisplayWaitingList] = useState(false)
    let [welcomeSnippet, setWelcomeSnippet] = useState(`Welcome to E-Tutoring! My name is ${name}. Please unmute or type your question when you are ready.`)
    let [waitSnippet, setWaitSnippet] = useState(`Welcome to E-Tutoring! My name is ${name}.  There is/are ${numStudents} number of people ahead of you in line.
    ${(displayWaitingList) ? `The estimated wait time is ${numStudents * 20} min maximum.` : ``}`)
    let [checkingSettings, setCheckingSettings] = useState("I cannot hear your, please wait while I check my settings.")
    let [checkYourSettings, setCheckYourSettings] = useState("I have checked my settings, my microphone and speakers are working. Please check your settings. Typical problems include: 'Check your OS audio settings for volume/mute', 'Check Zoom settings, use option to test speakers and mircrophone under the microphone sub-menu on the bottom left of the Zoom window'.")
    let [snippets, setSnippets] = useState([welcomeSnippet, waitSnippet, checkingSettings, checkYourSettings])
    useEffect(() => {
        let newWelcomeSnippet = `Welcome to E-Tutoring! My name is ${name}. Please unmute or type your question when you are ready.`
        setWelcomeSnippet(newWelcomeSnippet)
        let newWaitSnippet = `Welcome to E-Tutoring! My name is ${name}.  There is/are ${numStudents} number of people ahead of you in line.
        ${(displayWaitingList) ? `The estimated wait time is ${numStudents * 20} min maximum.` : ``}`
        setWaitSnippet(newWaitSnippet)
        setSnippets([newWelcomeSnippet, newWaitSnippet, checkingSettings, checkYourSettings])
    }, [name, numStudents, displayWaitingList, checkingSettings, checkYourSettings])
    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }
    const handleNumStudentsChange = (evt) => {
        setNumStudents(evt.target.value)
    }
    const copyText = function (text, index) {
        navigator.clipboard.writeText(text)
        document.getElementById("tooltipspan" + index).innerHTML = "Copied"
    }
    const mouseOutFunc = function (index) {
        document.getElementById("tooltipspan" + index).innerHTML = "Copy to Clipboard"
    }
    return (
        <div>
            <label htmlFor="nameInput">Enter Name Here</label>
            <input name="nameInput" id="nameInput" value={name} onChange={handleNameChange} />
            <label htmlFor="numStudents">Number of Students</label>
            <input type="number" disabled value={numStudents} onChange={handleNumStudentsChange} />
            <button type="button" disabled={(!numStudents) ? true : false} onClick={() => setNumStudents(numStudents - 1)}>Minus</button>
            <button type="button" onClick={() => setNumStudents(numStudents + 1)}>Plus</button>
            <label htmlFor="Display Wait-Time" >Display Wait Time</label>
            <input type="checkbox" value={displayWaitingList} onClick={() => setDisplayWaitingList(!displayWaitingList)} />
            {snippets.map((snippet, index) => {
                return <div key={index} className="snippetEntry">
                    <h5 value={snippet}>{snippet}</h5>
                    <div className="tooltip">
                        <button type="button" onClick={() => copyText(snippet, index)} onMouseOut={() => mouseOutFunc(index)}>
                            <span className="tooltiptext" id={"tooltipspan" + index}>Copy to Clipboard</span>
                            Copy
                        </button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ChatSnippets
