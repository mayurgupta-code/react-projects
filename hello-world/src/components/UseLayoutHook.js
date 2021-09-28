import React, {useLayoutEffect, useEffect,  useRef} from 'react'

// useLayoutEffect renders first then useEffect hook on page reload
function UseLayoutHook() {
    useLayoutEffect(() => {
        console.log("useLayoutEffect")
    })

    useEffect(() => {
        console.log("useEffect")
    })

    return (
        <div>
            <h1>useLayoutEffect Hook Tutorial</h1>

        </div>
    )
}

export default UseLayoutHook
