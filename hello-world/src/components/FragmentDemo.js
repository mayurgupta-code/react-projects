import React from 'react'

function FragmentDemo() {
    return (
        <>
            <h1>React Fragment</h1>
            <p>This is React Fragment</p>
        </>
    )
}

export default FragmentDemo
// react returns a single parent node only
// but if we want not to return any parent element then
// we can use React.Fragment or <> </> empty opening closing tag