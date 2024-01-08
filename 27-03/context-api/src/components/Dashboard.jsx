import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

function Dashboard() {
    const {userEmail} = useContext(UserContext)
    return (
        <div>
            User Email in Dashboard Component : {userEmail}
        </div>
    )
}

export default Dashboard
