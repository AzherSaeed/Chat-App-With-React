import React, { useReducer } from 'react';
import AddMessage from './AddMessage'
import MessageHistory from './MessageHistory';
import PropTypes from 'prop-types'

class ChatWindow extends React.Component {

    onMessage = message => {
        this.props.onMessage(this.props.user.userName , message)
        console.log(message)
    }

    render(){
        const {user , messages} = this.props
        return(
        <div className="chat-window">
        <h4>Super Awesome Chat</h4>
        <h6>{user.userName}</h6>
        <MessageHistory messages={messages} user={user} />
        <AddMessage onMessage={this.onMessage} />
      </div>
        )
    } 
}
ChatWindow.prototypes = {
    onMessage : PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
    message : PropTypes.array.isRequired
}
export default ChatWindow;