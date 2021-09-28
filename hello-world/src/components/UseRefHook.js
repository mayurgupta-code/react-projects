import React, {useRef} from 'react'

// this inputRef used in a situation whenever we felt that we can solve this problem using the vanilla js only
// or to manipulate the DOM inside the reactjs like the vanilla js
function UseRefHook() {
    const inputRef = useRef(null)

    const clickHandler = () => {
        console.log(inputRef.current.value)
        inputRef.current.focus()
        inputRef.current.value = ""
    }

    return (
        <div>
            <h1>useRef Hook Tutorial</h1>
            <input type="text" placeholder="type something" ref={inputRef} /><br /><br />
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    )
}

export default UseRefHook
