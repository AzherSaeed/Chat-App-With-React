import React from 'react';
import './App.css';
import AddMessage from './AddMessage';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const users = [{userName : "Azher"} , {message : "Good App"}]

class App extends React.Component{
  state = {
    message : [],
    
  }
onMessage = (userName , message) => {
      const newMessage = {
        ['userName'] : userName,
        ['message'] : message      
    }
    this.setState(currState => ({
      message : currState.message.concat([newMessage])
    }))
    console.log(newMessage)
  }

  
  render(){
    
    return (
      <div className="App">
        <div className="container">
        <AddMessage onMessage={this.onMessage}/>
        </div>
      </div>
    );
  }
  
}

export default App;
