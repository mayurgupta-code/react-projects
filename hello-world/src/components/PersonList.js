import React from 'react'
import NameList from './NameList'

    function PersonList({person}) {
        return (
            <div>
                <h2>
                    I am a {person.name}, I am {person.age} old and my skills is {person.skill}
                </h2>
            </div>
        )
    }

export default PersonList
