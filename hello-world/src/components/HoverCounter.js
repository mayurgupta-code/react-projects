import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <h2 onMouseOver={incrementCount}>
                Hover {count} times
            </h2>
        )
    }
}

export default UpdatedComponent(HoverCounter) 
