import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const ProposalCardView =(props)=> {
    const {
        nameIdea, 
        descriptionIdea, 
        area, 
        oven, 
        handleAproved, 
        handleComment,
        handleDenied,
        handleDetail} = props  

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{nameIdea}</Card.Title>
                <Button variant="outline-info" onClick = {handleDetail}>Detail</Button>
            </Card.Body>    
            <Card.Subtitle className="mb-2 text-muted">{area} - {oven}</Card.Subtitle>
            <Card.Text>{descriptionIdea}</Card.Text>
            <Card.Body className='d-flex justify-content-evenly'>
                <Button variant="outline-success" onClick = {handleAproved}>aproved</Button>
                <Button variant="outline-warning" onClick = {handleComment}>comment</Button>
                <Button variant="outline-danger" onClick = {handleDenied}>denied</Button>
            </Card.Body> 
        </Card.Body>
    </Card>
    )
}