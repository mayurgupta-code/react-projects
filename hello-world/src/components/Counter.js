import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback Value', this.state.count)
        //     })
        // this is synchronous JS outside setState that's why it's 
        // one count back because firstly console.log is executed then page is rendered
        // so to avoid this we use callback function inside setState as the second argument

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))

        // console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    } 


    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter