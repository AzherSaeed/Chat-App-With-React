import React from 'react';
import PropTypes from 'prop-types'

const MessageHistory = (props) => {
    const {messages , user} = props

return(
    <ul className="message-list">
        {
        messages.map((message  , index) => (
            <li key={index}
            className={messages.userName === user.userName ? 'message sender' : 'message recipient'}
            >  <p>{` Send by ... ${message.userName} : ${message.text}`}</p></li>
          
        ))
    }

    </ul>
)
}
MessageHistory.propTypes = {
    message : PropTypes.array.isRequired,
    user : PropTypes.object.isRequired
}

export default MessageHistory;