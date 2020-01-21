import React from "react";
import {connect} from 'react-redux';
import MessagePane from './MessagePane/MessagePane';
import UserList from './UserList/UserList';
import "./App.css";

const users = [
  { id: 1, name: 'Ben' },
  { id: 2, name: 'Jen' },
  { id: 3, name: 'Meg' },
  { id: 4, name: 'Jeff' },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      users,
      selectedUser: null
    };
    this.onSendMessage = this.onSendMessage.bind(this);
    this.onUserSelect = this.onUserSelect.bind(this);
  }

  onSendMessage(text) {
    const newMessage = {
      text,
      user: this.state.selectedUser
    }

    const messages = [...this.state.messages, newMessage];
    this.setState({messages})
  }

  onUserSelect(name) {
    this.setState({selectedUser: name})
  }

  render() {
    return (
      <div className="App">
        <UserList selectedUser={this.state.selectedUser} users={this.state.users} onSelect={this.onUserSelect}/>
        {this.state.selectedUser ? <MessagePane messages={this.state.messages} onSendMessage={this.onSendMessage}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
