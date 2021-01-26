import React, { Component } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: "550px" }}>
                <h1 className="text-center mt-3">Свяжитесь с нами</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit"  >Отправить</Button>
                </Form>
            </Container>
        );
    }
}

export default Contacts;