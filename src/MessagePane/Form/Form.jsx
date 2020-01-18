import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    onSubmit() {
        const message = this.state.message;
        this.props.onSend(message);
        this.setState({message: ''});
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.onSubmit();
        }
    }

    updateMessage(event) {
        this.setState({message: event.target.value});
    }

    render () {
        return (<div className="MessagePane-Form">
                    <div className="MessagePane-Form-container">
                        <p>
                            <textarea className="message" placeholder="Your Message" value={this.state.message} onChange={this.updateMessage} onKeyPress={this.handleKeyPress}/>
                        </p>
                        <p>
                            <button className="send" onClick={this.onSubmit}>Send</button>
                        </p>
                    </div>
                </div>)
    }
}

// Form.propTypes = {
//     onSend: React.PropTypes.func.isRequired
// }

Form.defaultProps = {
    onSend: () => {}
}

export default Form