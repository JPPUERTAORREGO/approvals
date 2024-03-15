import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const LoginView =(props)=> {
    const {
        user,
        mail, 
        password,
        handleChangeEmail,
        handleChangePassword,
        handleLogin
    } = props

    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={handleChangeEmail} value={mail} placeholder="Enter email" />
            <Form.Text className="text-muted">
              Ingrese usuario registrado
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleChangePassword} value={password} type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={handleLogin} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}