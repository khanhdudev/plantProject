import NavBar from './NavBar';
import { Col, Container, Row  } from 'reactstrap';
import Jumbotron from './Jumbotron';


function Header() {
   return (
      <>
         <Container >
            <Row style={{width: "100%"}}>
               <Col lg={3}></Col>
               <Col lg={6} className='d-md-none'>
                  asdf
               </Col>
               <Col lg={3}>
                  
               </Col>

            </Row>
         </Container>
         {/* Navigation */}
         <NavBar />
         {/* jumbotron */}
         <Jumbotron />
      </>
   );
}

export default Header;