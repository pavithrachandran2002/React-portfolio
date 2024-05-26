import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';



function Navbars() {
  return (

      <Navbar fluid rounded className='bg-black'>
      
    
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings"  rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">PAVITHRA C</span>
            <span className="block truncate text-sm font-medium">pavithra.chandran@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle/>
  
      
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>


  )
}

export default Navbars
