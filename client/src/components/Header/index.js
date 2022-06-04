import React from 'react'
import { Link } from 'react-router-dom';


const Header =() =>{
    return (
<Header>
   <div>
      <Link to="/" >
          <p> NEXT-LEVEL</p>
      </Link>
   </div>
   <div>
       <nav>
       <Link to="/Dashboard" >
          <p> My Profile</p>
      </Link>

      <Link to="/Dashboard" >
          <p> My Profile</p>
      </Link>
       </nav>
   </div>
</Header>
    )
}

export default Header