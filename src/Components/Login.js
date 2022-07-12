import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {Button, Card, Row, Col} from 'react-bootstrap';

function Login() {
  return (
    <div className=''>
      <Row>
        <Col md={{span:4, offset:2}} className="border p-3 mt-3" style={{marginRight:"20px"}}>
            <Card.Body className="adminbody">
              <Card.Title>
                  <h3>Admin</h3>
              </Card.Title>
              <Card.Img style={{borderRadius:"50%", height:"200px", width:"200px", border:"1px solid black"}} variant="top" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" />
            </Card.Body>
            <Button href="/admin" className="px-4">Login</Button>
      </Col>
      <Col md={{span:4}} className="border p-3 mt-3">
       
          <Card.Body className="userbody">
              <Card.Title>
                  <h3>User</h3>
              </Card.Title>
              <Card.Img style={{borderRadius:"50%", width:"200px", border:"1px solid black"}} variant="top" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </Card.Body>
            <Button href="/user" className="px-4">Login</Button>

      </Col>
      </Row>
      
    </div>
  )
}

export default Login