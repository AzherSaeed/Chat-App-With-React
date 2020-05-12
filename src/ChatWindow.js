import React, { useReducer } from 'react';
import AddMessage from './AddMessage'
import MessageHistory from './MessageHistory';

class ChatWindow extends React.Component {
    
    onMessage = message => {
        this.props.onMessage(this.props.user.userName , message)
    }

    render(){
        const {user , messages} = this.props
        return(
            <div>
    
                <p>{user.userName}</p>
                <AddMessage onMessage={this.onMessage}/>
                <MessageHistory messages={messages} user={user}/>
    
            </div>
        )

    }
   

  
    
    
  
}

export default ChatWindow;