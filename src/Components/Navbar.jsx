import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
           <nav>
                <ul style={{display:"flex", justifyContent:"space-around"}}>
                    <li><Link to="/comments">Comments</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/post">Posts</Link></li>
                    <li><Link to="/user">Users</Link></li>
                </ul>
            </nav>
     

    </div>
  )
}

export default Navbar