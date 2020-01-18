import React from 'react'
import PropTypes from 'prop-types'
import './MessagePane.css'
import Form from './Form/Form'

const Message = ({text}) => {
    return (<div className="Message">
                <div className="Message-text">{text}</div>
            </div>)
}

const List = ({messages}) => {
    return (<div className="MessagePane-Form">
                {messages.map(({id, text}) => <Message key={id} text={text}/> )}
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