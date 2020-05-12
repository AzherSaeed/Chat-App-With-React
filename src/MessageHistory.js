import React from 'react'

const MessageHistory = (props) => {
    const {messages , user} = props
return(
   <div>
        <h1>MessageHistory</h1>
    {
        messages.map(message => (
        <p>{`${message.userName} ${message.text}`}</p>
        ))
    }
   </div>
)

}

export default MessageHistory;