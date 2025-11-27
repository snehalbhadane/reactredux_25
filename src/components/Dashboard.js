import React ,{ useContext,useEffect }from 'react'
import{Container,Row,Col,Card,Navbar,Nav,Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  return (
    <div>
    <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" >
            Logout
          </Button>
        </Nav>
      </Navbar>
    <Container className="my-4">
        <h2 className="mb-4"> Dashboard Overview</h2>
    <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
               <Card.Title>Total Competencies</Card.Title>
               <Card.Text>4</Card.Text>

            </Card.Body>

          </Card>
        
        </Col>
    </Row>

    </Container>
    </div>
  )
}

export default Dashboard
