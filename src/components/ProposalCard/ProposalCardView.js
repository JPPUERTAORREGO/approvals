import React from 'react'
import Card from 'react-bootstrap/Card'

export const ProposalCardView =(props)=> {
    const {
        proposal,
        handleDetail,
        } = props  

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body onClick={()=>handleDetail(proposal)}>
            <Card.Body className='d-flex justify-content-between'>
                <Card.Title>{proposal.nameIdea}</Card.Title>
            </Card.Body>    
            <Card.Subtitle className="mb-2 text-muted">{proposal.area} - {proposal.oven}</Card.Subtitle> 
        </Card.Body>
    </Card>
    )
}