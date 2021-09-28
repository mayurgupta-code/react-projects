import React, { useEffect, useState } from 'react'
import axios from 'axios'


// useEffect change the states whenever the page loads instantly
// useEffect function calls every time whenever the page refreshes
function UseEffectHook() {
    const [data, setData] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("page reloads")
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data[0].title)
                // console.log(res.data)
                console.log('API CALLED')
            })
            .catch(err => { console.error(err) })

    })
    return (
        <div>
            <h1>Use Effect Tutorial <br /> {data}</h1>
            <div>{count}</div><br />
            <button onClick={() => {
                setCount(count + 1)
            }}>Click ME!</button>
        </div>
    )
}

export default UseEffectHook
