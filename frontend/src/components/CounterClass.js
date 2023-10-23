import React from "react"

// class base approach

// 01. create class 
class CounterClass extends React.Component{
    //02. create constructor
    constructor(){
        super()  // all are the things pass to the super component
        this.increment = this.increment.bind(this)  // class does not know bout the class name we need to bind with the class
        this.state = {
            number : 0   // In javaascript state is the javascript object 
        }
    }
    // 05. create counter function to incremet the number

    increment (){
        this.setState({
            number : this.state.number + 1
        })
    }

    //03. create render function for add the html elements
    render(){
        //04. return the statement
        return(
            <div> 
                <h3>Class Component</h3>
                <h1> Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default CounterClass