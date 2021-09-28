import React from 'react'

// // create simple Function Component
// function Greet() {
//     return <h1>Hello Mayur</h1>
// }

// // export simple Function Component
// export default Greet

// using name export
// export const Greet = ()=> {
//     return <h1>Hello Mayur</h1>
// }

// using default export 
// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// using destructure
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a. {heroName}</h1>
//         </div>
//     )
// }

const Greet = (props) => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1>
        </div>
    )
}

export default Greet
