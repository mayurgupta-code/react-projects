import React, { useState, createContext } from 'react'
import LoginContext from './LoginContext'
import UserContext from './UserContext'

// we can transfer the functions and variables using props
// but if we've lot more states then we can't pass whole states using props
// so here comes the role of context api

// now wrap the whole components inside the AppContext.Provider by which this makes a tree like this passes the whole states inside the nested components and we have access to all the states inside the nested components without passing to the props
export const AppContext = createContext(null)

function useContextHook() {
    const [username, setUsername] = useState("")

    return (
        <div>
            <h1>useContext Hook Tutorial</h1>
            {/* using props */}
            {/* <LoginContext setUsername={setUsername} /> 
            <UserContext username={username} /> */}

            {/* using context api */}

            {/* pass states as values inside this tag */}
            <AppContext.Provider value={ {username, setUsername} }>
                <LoginContext />
                <UserContext />
            </AppContext.Provider>

        </div>
    )
}

export default useContextHook
