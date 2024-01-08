import React from 'react'
import Child from './Child'

function Parent() {
    let messageFromChild = ""
    console.log("Message From child is ..", messageFromChild)

    const messageHandler = (dataFromChild) => {
        messageFromChild = dataFromChild
        console.log("After being called from child", messageFromChild)
    }
    return (
        <div style={{width:300, height:300, border:"1px solid red"}}>
            <h3>
                It is Parent Component
            </h3>
            <Child message="Message From Parent" updateMessage={messageHandler}/>
        </div>
    )
}


export default Parent
