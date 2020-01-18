import React from 'react'

class Form extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {

    }

    render () {
        return (<div className="MessagePane-Form">
                    <div className="MessagePane-Form-container">
                        <p>
                            <textarea className="message" placeholder="Your Message"/>
                        </p>
                        <p>
                            <button className="send" onClick={this.onClick}>Send</button>
                        </p>
                    </div>
                </div>)
    }
}

export default Form