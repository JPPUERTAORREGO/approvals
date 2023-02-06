import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const CommentsForm =({handleSendComment, proposal, commmentText})=> {

    return(
        <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={commmentText} type="area" placeholder="Enter comment" />
                <Form.Text className="text-muted">
                Ingrese el comentario
                </Form.Text>
            </Form.Group>
            <Button onClick={()=>handleSendComment(proposal)} variant="secondary">
                Submit
            </Button>
            </Form>
    </>
    )
}