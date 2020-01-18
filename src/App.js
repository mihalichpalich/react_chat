import React from "react";
import MessagePane from './MessagePane/MessagePane'
import "./App.css";

const messages = [
  {
    id: 1,
    text: 'hi',
    author: 'Ben',
    user_id: 1
  },
  {
    id: 2,
    text: 'hi to you too',
    author: 'Jen',
    user_id: 2
  },
  {
    id: 3,
    text: 'hi from another user',
    author: 'Meg',
    user_id: 3
  },
  {
    id: 4,
    text: 'hi to you too from another user',
    author: 'Jeff',
    user_id: 4
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages
    };
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  onSendMessage(text) {
    const newMessage = {
      id: this.state.messages[this.state.messages.length - 1].id +1
    }
  }

  render() {
    return (
      <div className="App">
          <MessagePane messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
