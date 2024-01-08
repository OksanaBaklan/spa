import React from 'react'
import ArrayEntry from './ArrayEntry'

function ArrayList(props) {
    const {timesArray} = props
    return (
        <ul>
            {timesArray.map(item=><ArrayEntry dateString = {item} />)}
        </ul>
    )
}

export default ArrayList
