import {Link} from 'react-router-dom'
import React from 'react'
import '../styles/App.css'

const Navbar = () => {
  return (
    <div>
      <div className='navibar'>
        <h2>GOT World</h2>
      </div>
      <div className='text1'>Contains all the information related to the 
            "A Song of Ice and Fire" book series, 
            such as characters, houses, books, and quotes
      </div>
      <div className="navbar">
        <Link to="/">Books Layout</Link>
      </div>
    </div>        
 )
}

export default Navbar


