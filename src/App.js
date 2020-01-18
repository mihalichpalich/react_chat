import React from "react";
import MessagePane from './MessagePane/MessagePane'
import "./App.css";

const messages = [
  {
    id: 1,
    text: 'hi',
    author: 'Ben',
    channel_id: 1
  },
  {
    id: 2,
    text: 'hi to you too',
    author: 'Jen',
    channel_id: 1
  },
  {
    id: 3,
    text: 'hi from another user',
    author: 'Meg',
    channel_id: 2
  },
  {
    id: 4,
    text: 'hi to you too from another user',
    author: 'Jeff',
    channel_id: 2
  }
];

function App() {
  return (
    <div className="App">
        <MessagePane messages={messages}/>
    </div>
  );
}

export default App;
