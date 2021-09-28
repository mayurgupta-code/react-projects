import React, { useState } from 'react'

// import useState from react by destructing from react

const State = () => {
    // let counter = 0
    const [counter, setCounter] = useState(0)
    // this is the syntax for the react useState 
    // and this is to be defined like counter is variable and setCounter is function
    // inside useState set the initial value 
    // const increment = () => {
    //     counter = counter + 1
    //     console.log(counter) 
    // }

    // now to make increment using the state
    // this function is like define the new value inside the function that what value after render assigns to counter variable
    const increment = () => {
        setCounter(counter + 1)
    }

    // function increment() {
    //     counter = counter + 1
    //     console.log(counter)
    // }

    // can use var, let, const to define the arrow function whatever we need 
    // var increment = () => {
    //     counter = counter + 1
    //     console.log(counter)
    // }

    // for input value
    const [InputValue, setInputValue] = useState("Mayur")
    
    let inputHandler = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    // onChange attribute is used to call the function everytime whenever the value changes
    return (
        <div>
            <div>Hello State</div>
            <div>{counter}</div>
            <button onClick={increment}>Increment</button><br /><br />
            <input type="text" placeholder="enter something" onChange={inputHandler} />
            <br />
            {InputValue}
        </div>
    )
}

export default State
