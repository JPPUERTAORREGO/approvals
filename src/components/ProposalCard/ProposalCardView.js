import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const ProposalCardView =(props)=> {
    const {
        proposal,
        handleAproved, 
        handleComment,
        handleDenied,
        handleDetail,
        showDetail} = props  

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body onClick={()=>handleDetail(proposal)}>
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{proposal.nameIdea}</Card.Title>
            </Card.Body>    
            <Card.Subtitle className="mb-2 text-muted">{proposal.area} - {proposal.oven}</Card.Subtitle>
            {showDetail
            ? <Card.Body className='d-flex justify-content-evenly'>
                <Button variant="outline-success" onClick = {handleAproved}>aproved</Button>
                <Button variant="outline-warning" onClick = {handleComment}>comment</Button>
                <Button variant="outline-danger" onClick = {handleDenied}>denied</Button>
            </Card.Body>
            :<p></p>}
 
        </Card.Body>
    </Card>
    )
}