import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {
        // if (this.state.isLoggedin) {
        //     return <div>Welcome Mayur</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return this.state.isLoggedin ? (
        //     <div>Welcome Mayur</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        return this.state.isLoggedin && <div>Welcome Mayur</div>
    }
}

export default UserGreeting
