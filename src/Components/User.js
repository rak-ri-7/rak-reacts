import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import DemoForm from './DemoForm';

function User() {
  return (
    <div>
        
        <div>
        <Container className='logincont'>
            <Row>
                <Col md={{span:6, offset:3}} className="border border-primary rounded p-4">
                    <h4 style={{textAlign:"center"}}>USER LOGIN</h4>
                    <Form className="mt-4">
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>

                        <Form.Group className="mt-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button className="mt-4 px-3" href="/registration">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>

       
    </div>
  )
}

export default User