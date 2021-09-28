import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Mayur'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifestyleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifestyleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevstate){
        console.log('LifestyleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifestyleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: "Mansi"
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
