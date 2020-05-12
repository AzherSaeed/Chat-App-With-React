import React from 'react';
import './App.css';
import ChatWindow from './ChatWindow'

const users = [{userName : "Azher"} , {userName : "Saeed"}]

class App extends React.Component{
  state = {
    messages : [],
    
  }
onMessage = (userName , message) => {
      const newMessage = {
        ['userName'] : userName,
        ['text'] : message      
    }
    this.setState(currState => ({
      messages : currState.messages.concat([newMessage])
    }))
  }

  
  render(){
    const { messages } = this.state;
    return (
      <div className="App">
       <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={messages}
              onMessage={this.onMessage}
            />
          ))}
        </div>
        
      </div>
    );
  }
  
}

export default App;
