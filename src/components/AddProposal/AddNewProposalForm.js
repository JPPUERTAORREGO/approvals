import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const AddNewProposalForm =(props)=> {
    const {onChangeName, onChangeDescription, onChangeCost, handleSubmit} = props

    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Idea name / nombre de la idea</Form.Label>
            <Form.Control onChange={onChangeName} type="text" maxLength='40' placeholder="Enter the name of the idea" />
            <Form.Text className="text-muted">
            Max 40 characters
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descrition about idea</Form.Label>
            <Form.Control onChange={onChangeDescription} as="textarea" rows={3} placeholder="Full description about idea" />
            <Form.Text className="text-muted">
            Max 40 characters
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Implementation Value</Form.Label>
            <Form.Control onChange={onChangeCost} type="number" maxLength='40' placeholder="Enter only numbers" />
            <Form.Text className="text-muted">
            Enter the value in COP
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Select the aprover</Form.Label>
        <Form.Select >
          <option>JLK</option>
          <option>JFC</option>
          <option>JFM</option>
          <option>MMG</option>
        </Form.Select>
      </Form.Group>
        <Button onClick={handleSubmit} variant="outline-primary" type="submit">
            Submit
        </Button>
        </Form>
    )
}