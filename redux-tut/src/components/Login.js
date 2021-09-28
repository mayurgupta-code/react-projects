import React from 'react';
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user"


// useSelector hook is used to access the information
// useDispatch hook is used to change the state or payload
function Login() {
    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({name: "Mayur", age: 21, email: "mayur@codeif.org"}))
                }}>Login</button>
            <button
            onClick={() => {
                dispatch(logout())
            }}>Logout</button>    
        </div>
    )
}

export default Login
