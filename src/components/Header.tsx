import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import { Col, Container, Row } from 'reactstrap';

Header.propTypes = {
   
};

function Header() {
   return (
      <>
         <Container className='container'>
            <Row>
               <Col md={6}>
               </Col>
            </Row>
         </Container>
         <NavBar />
      </>
   );
}

export default Header;