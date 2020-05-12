import React from 'react'

class AddMessage extends React.Component{
    state = {
        message : ""
    }

    handleMessage = event => {
        const value = event.target.value
        
        this.setState(() => ({
            message : value
        }))
    }

    handleInput = (event) => {
        event.preventDefault();
        this.props.onMessage(this.state.message)
        // console.log(this.state.message)
    }
    
    render(){
        
        return (
            <div>
                <h1>Chat App</h1>
                <form onSubmit={this.handleInput} >
                    <input type="text" placeholder="Send you thoughts..."
                    value={this.state.message}
                    onChange={this.handleMessage}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default AddMessage;