import React, { Component } from 'react'

class Welcome extends Component{
    constructor(props) {
        super(props)
        this.state = {
            message:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render(){
        //state
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
} 


export default Welcome;