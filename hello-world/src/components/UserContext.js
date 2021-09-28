import React, { useContext } from 'react'
import { AppContext } from './UseContextHook'
// using props
// function UserContext({username}) {
//     return (
//         <div>
//             <h1>User: {username}</h1>
//         </div>
//     )
// }

// using context api

function UserContext() {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>User: {username}</h1>
        </div>
    )
}

export default UserContext
