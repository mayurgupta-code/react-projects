import React from 'react'
import PersonList from './PersonList'

function NameList() {
    // const names = ['surya', 'mansi', 'mayur']
    // const nameList = names.map(name => <h2>{name}</h2>)

    // return <div>{nameList}</div>



    // return (
    //     <div>
    //         <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2>
    //     </div>
    // )

    const Persons = [
        {
            id: 1,
            name: 'Surya',
            age: 24,
            skill: 'Management',
        },
        {
            id: 4,
            name: 'Mansi',
            age: 19,
            skill: 'Django',
        }
    ]
    const personList = Persons.map(person => <PersonList key={person.id} person={person} />)
    return <div>{personList}</div>

    // key attribute should be there otherwise react shows warning

    // create list in separate component and render that list in different component
    // this is to get the data separetely and html separately
    // send person as props inside PersonList
}

export default NameList
