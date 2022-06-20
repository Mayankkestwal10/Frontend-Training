// Normal Component - render will run everytime the button is clicked but the state is same, so these are unnecessary re-renders
import React, { Component } from "react";

class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: 10
        }
    }

    render(){
        console.log(this.state);
        return (
        <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.setState({
                data: 10
            })}></button>
        </div>
        )
    }
}

// Pure Component - It basically implements shouldComponentUpdate where it does compare the state or props and do a shallow comparison
// if there is any change then only the re-renders happens

import React, { PureComponent } from "react";

class Note extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            data: 10
        }
    }

    render(){
        console.log(this.state); // only renders once
        return (
        <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.setState({
                data: 10
            })}></button>
        </div>
        )
    }
}


