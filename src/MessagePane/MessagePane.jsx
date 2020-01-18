import React from 'react'
import PropTypes from 'prop-types'
import './MessagePane.css'
import Form from './Form/Form'

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

const Message = ({author, text}) => {
    return (<div className="Message">
                <div className="Message-author">{author}</div>
                <div className="Message-text">{text}</div>
            </div>)
}

const List = ({messages}) => {
    return (<div className="MessagePane-Form">
                {messages.map(({id, author, text}) => <Message key={id} author={author} text={text}/> )}
            </div>)
}

const MessagePane = ({messages}) => {
    return (<div className="MessagePane-Form-container">
                <List messages={messages}/>
                <Form/>
            </div>)
}

MessagePane.defaultProps = {
    messages: []
}

MessagePane.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessagePane