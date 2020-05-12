import React from 'react'
import PropTypes from 'prop-types';


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
    isDisabled = () => {
        return this.state.message === ''
    }
    
    render(){
        
        return (
            <div>
                <form onSubmit={this.handleInput} className="input-group" >
                    <input type="text" placeholder="Send you thoughts..."
                    value={this.state.message}
                    onChange={this.handleMessage}
                    className="form-control"
                    />
                    <div className="input-group-append">
                    <button disabled={this.isDisabled()} className="btn submit-button">Send</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}
AddMessage.prototypes= {
    onMessage : PropTypes.func.isRequired,
}

export default AddMessage;