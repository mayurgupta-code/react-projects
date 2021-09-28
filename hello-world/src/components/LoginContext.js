import React, { useContext } from 'react'
import { AppContext } from './UseContextHook'

// using props
// function LoginContext({setUsername}) {
//     return (
//         <div>
//             <input 
//             type="text" 
//             placeholder="enter username" 
//             onChange={(event) => {
//                 setUsername(event.target.value)
//             }}
//             />
//         </div>
//     )
// }

// using context api

function LoginContext() {
    const { setUsername } = useContext(AppContext)
    return (
        <div>
            <input
                type="text"
                placeholder="enter username"
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
            />
        </div>
    )
}

export default LoginContext
