import React, {useState} from 'react'

// here in this we're altering the two states simultaneously and there we've to change the text 
// here we've to change the two states so that's why we use useReducer state
function UseState2() {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(true)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count+1)
                setShowText(!showText)
            }}>Click Here!</button>
            {showText && <p>This is text</p>}
        </div>
    )
}

export default UseState2
