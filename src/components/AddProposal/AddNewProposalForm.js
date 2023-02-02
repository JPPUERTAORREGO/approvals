import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const AddNewProposalForm =(props)=> {
    const {
        onChangeName, 
        onChangeDescription, 
        onChangeCost, 
        handleSubmit, 
        selectBoss, 
        handleCancel,
        handleArea,
        handleOven
    } = props

    return(
        <div className='container-xxl d-flex justify-content-center'>
        <Form className = 'w-50 p-3 m-5 border border-dark-subtle bg-secondary'>
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
            <Form.Group className='d-flex justify-content-evenly'>
                <Form.Group>
                    <Form.Label>Area</Form.Label>
                    <Form.Select onChange={handleArea}>
                        <option></option>
                        <option>Hornos</option>
                        <option>Mezclas</option>
                        <option>Linea 1</option>
                        <option>Linea 2</option>
                        <option>Linea 3</option>
                        <option>Linea 4</option>
                        <option>Linea 5</option>
                        <option>Planta general</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Oven</Form.Label>
                    <Form.Select onChange={handleOven}>
                        <option></option>
                        <option>Horno 1</option>
                        <option>Horno 2</option>
                        <option>Horno 3</option>
                        <option>Horno 4</option>
                        <option>Horno 5</option>
                        <option>Horno 6</option>
                        <option>Horno 7</option>
                        <option>Horno 8</option>
                        <option>Horno 9</option>
                        <option>Horno 10</option>
                        <option>Horno 11</option>
                        <option>Horno 12</option>
                        <option>Horno 18</option>
                        <option>Wafer 1</option>
                        <option>Wafer 2</option>
                        <option>Recubridora</option>
                        <option>Cremas</option>
                        <option>Planta general</option>
                    </Form.Select>
                </Form.Group>
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
                <Form.Select onChange={selectBoss} >
                <option></option>    
                <option>JLK</option>
                <option>JFC</option>
                <option>JFM</option>
                <option>MMG</option>
                </Form.Select>
            </Form.Group>
            <Button onClick={handleSubmit} variant="btn btn-primary" type="submit">
                Send to aprove
            </Button>
            <Button onClick={handleCancel} variant="btn btn-danger" type="submit">
                Cancel
            </Button>
        </Form>
        </div>
    )
}