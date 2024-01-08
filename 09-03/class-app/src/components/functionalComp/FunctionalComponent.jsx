import React from 'react'

function FunctionalComponent(props) {

    const {developerName, role, nameUpdater} = props
    console.log(props)

    nameUpdater("Sixtus")
    return (
       /* Just to clarify the difference between JSX and JS extensions that we are using while
       declaring the components

        React.createElement('div',{id: "functComp",class:"Ather"}, `My Name is ${myName}` ) */
        <div>
            <h2>
                It is a functional Component developed by {developerName} and he is a {role}
            </h2>
        </div>
        )
}

export default FunctionalComponent
