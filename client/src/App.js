import React from 'react'
import Message from './components/Message'
import DateDisplay from './components/DateDisplay'
import ChatSnippets from './components/ChatSnippets'
import Timer from './components/Timer'
import './style/App.css'

class App extends React.Component {
  constructor() {
    super()
    let firstDate = new Date()
    let time = `${((firstDate.getHours() % 12) < 10) ? ` ${firstDate.getHours() % 12}` : `${firstDate.getHours() % 12}`}${(firstDate.getSeconds() % 2) ? ':' : ' '}${(firstDate.getMinutes() < 10) ? `0${firstDate.getMinutes()}` : `${firstDate.getMinutes()}`} ${(firstDate.getHours() < 12) ? `AM` : `PM`}`
    this.state = {
      message: 'Welcome to the chat snippet menu!',
      time: time
    }
    this.timeFormatter = () => {
      const tmpDate = new Date()
      return `${((tmpDate.getHours() % 12) < 10) ? ` ${tmpDate.getHours() % 12}` : `${tmpDate.getHours() % 12}`}${(tmpDate.getSeconds() % 2) ? ':' : ' '}${(tmpDate.getMinutes() < 10) ? `0${tmpDate.getMinutes()}` : `${tmpDate.getMinutes()}`} ${(tmpDate.getHours() < 12) ? `AM` : `PM`}`
    }
    this.updateTime = (newTime) => {
      this.setState({ time: this.timeFormatter(newTime) })
    }
  }
  render() {
    return (<div id="App">
      <Message message={this.state.message}/>
      <div id="timeAndTimer">
        <DateDisplay time={this.state.time} setTime={this.updateTime} timeFormatter={this.timeFormatter} />
        <Timer timeFormatter={this.timeFormatter}/>
      </div>
      <ChatSnippets />
    </div>)
  }
}

export default App;
