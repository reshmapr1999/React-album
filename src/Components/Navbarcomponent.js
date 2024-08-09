import React from 'react'
import './Navbar.css'
import { Navbar } from 'react-bootstrap';

function Navbarcomponent() {
  return (
    <Navbar className ='nav ' expand="lg">
      <Navbar.Brand className='brand' >Album List</Navbar.Brand>
      
    </Navbar>
  )
}

export default Navbarcomponent
