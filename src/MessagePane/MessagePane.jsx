import React from 'react'
import PropTypes from 'prop-types'
import './MessagePane.css'
import Form from './Form/Form'

const Message = ({user, text}) => {
    return (<div className="Message">
                <p className="Message-author">{user}</p>
                <div className="Message-text">{text}</div>
            </div>)
}

const List = ({messages}) => {
    return (<div className="MessagePane-Form">
                {messages.map(({index, text, user}) => <Message key={index} text={text} user={user}/> )}
            </div>)
}

const MessagePane = ({messages, onSendMessage}) => {
    return (<div className="MessagePane-Form-container">
                <List messages={messages} onSend={onSendMessage}/>
                <Form onSend={onSendMessage}/>
            </div>)
}

MessagePane.defaultProps = {
    messages: []
}

MessagePane.propTypes = {
    messages: PropTypes.array.isRequired
}

export default MessagePane