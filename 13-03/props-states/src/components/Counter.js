import React, { useState } from 'react'

function Counter({count, setCount}) {



    const increment = () => setCount(count=>count + 1)
    const decrement = () => setCount(count=>count - 1)

    return (
        <div>
            Count : {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </div>
    )
}

export default Counter
