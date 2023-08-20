import React from 'react'
import {Link} from 'react-router-dom'

export default function UserHome() {
  return (
    <div>
        <Link to="/viewuser"><h2>View Profile</h2></Link>
        <Link to="/updateuser"><h2>Update Profile</h2></Link>
        <Link><h2>Delete Account</h2></Link>
        <Link><h2>Logout</h2></Link>
    </div>
  )
}
