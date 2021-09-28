import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

    }
    
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" 
                ref={this.inputRef}/>
                <button 
                onClick={this.clickHandler} >Click Me!</button>
            </div>
        )
    }
}

export default RefsDemo

// this is for to focus an input whenever page reloads