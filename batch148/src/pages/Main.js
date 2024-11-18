import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Main() {
  return (
    <div>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>

        <Outlet/>
    </div>
  )
}

export default Main