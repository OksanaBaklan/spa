import React from 'react'

function Child(props) {

    // Destructing the props objects

    const {message, updateMessage} = props

// At this point updateMessage is the function that parent shared through props to his child component
// Then we are calling that function or running that function
// While declaring the function inside the Parent we mentioned that it will accept some parameters


    updateMessage({
        name:"Test",
        age:20
    })
    return (
        <div style={{height:200, width:200, border:"1px solid green"}}>
            <h3>
                It is a child Component.
            </h3>
            <p>
                {message}
            </p>
        </div>
    )
}

export default Child
