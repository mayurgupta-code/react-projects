// class components
// import react and component class 
// then extends component class with welcome 
import React, { Component } from 'react'

// class Welcome extends Component{
//     render(){
//         return <h1>Hello Class Component I'm {this.props.name}</h1>
//         // here props are accessed by the this keyword
//     }
// }

// destructure
class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h1>Hello Class Component I'm {name} a.k.a. {heroName}</h1>
        // here props are accessed by the this keyword
    }
}

export default Welcome