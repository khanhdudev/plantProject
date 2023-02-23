import React, { useState } from 'react';
import {Navbar,
   NavItem,
   NavbarToggler,
   Collapse, 
   Nav,
   NavbarBrand
} from 'reactstrap';
import {NavLink , Link} from 'react-router-dom';
import {BsApple , BsSearch} from 'react-icons/bs';

import './nav.css';

let styleNavbar ={
   display: 'block', 
   width: "100%",
   backgroundColor: "#00a76f"
}

function NavBar() {
 
   const [isOpen, setIsOpen] = useState(false);
 
   return (
      <div style={styleNavbar}>
         <div className='container'>
            <Navbar dark expand="lg">
               <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
               <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                     <div className='text-center'>
                        <NavLink to="/" className="nav-link link-font">Home</NavLink>
                     </div>
                     <div className='text-center'>
                        <NavLink to="/product" className="nav-link link-font">Product</NavLink>
                     </div>
                     <div className='text-center'>
                        <NavLink to="/contact" className="nav-link link-font">Contact</NavLink>
                     </div>
                  </Nav>
               </Collapse>
            </Navbar>

            <div className="col-lg-0">
               <Link to="/" className="nav-link">
                  <BsApple className='icon-logo' />               
               </Link>
            </div>

            <div className="nav-link">
               <BsSearch className='icon-search' />
            </div>
         </div>
         
      </div >
   );
}

export default NavBar;