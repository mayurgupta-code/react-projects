import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PureComp

// here class component is there but with extending PureComponent Class not with Component class
// rpce snippet

// Pure component implements shouldComponentUpdate lifecycle method by comparing the shallow comparison on the props and state of the component but regular component does not implement shouldComponentUpdate it returns true by default

// for class based components Pure Component is there (by definition usage) and for function based component we have react.memo