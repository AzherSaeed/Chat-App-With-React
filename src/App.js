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
        ['message'] : message      
    }
    this.setState(currState => ({
      messages : currState.messages.concat([newMessage])
    }))
    console.log(newMessage)
  }

  
  render(){
    const { messages } = this.state;
    return (
      <div className="App">
        {users.map(user => (
           <ChatWindow 
           key={user.userName}
           user={user}
          onMessage={this.onMessage}
           messages={messages} />
        ))}
        
      </div>
    );
  }
  
}

export default App;
