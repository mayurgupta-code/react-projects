import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Mayur')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

// child component calls the method in the parent component