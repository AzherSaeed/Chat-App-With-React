import React, { useReducer } from 'react';
import AddMessage from './AddMessage'

const ChatWindow = (props) => {
    const {user} = props
    return(
        <div>

            <p>{user.userName}</p>
            <AddMessage/>

        </div>
    )
}

export default ChatWindow;