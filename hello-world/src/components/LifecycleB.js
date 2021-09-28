import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mayur'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifestyleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifestyleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevstate){
        console.log('LifestyleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifestyleB componentDidUpdate')
    }
    

    render() {
        console.log('LifecycleB render')
        return (
            <div>
               Lifecycle B 
            </div>
        )
    }
}

export default LifecycleB
