// step 1: import React 
import React from 'react'

// step 2: create const arrow function and return JSX
const Hello = ()=>{
    // with JSX
    // return (
    //     <div>
    //         <h1>Hello Mayur this is JSX</h1>
    //     </div>
    // )

    // without JSX, we've to use the React.createElement
    // first argument is tag then second any attribute of the tag in key:pair
    // then inside tag
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Mayur')
    )
}

// step 3: export default the arrow function
export default Hello 