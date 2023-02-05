import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

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
            <ProgressBar>
            <ProgressBar striped variant="danger" now={proposal.stateCreate} label='propuesta'/>
            <ProgressBar variant="warning" now={proposal.stateAproved} label='Ok jefe'/>
            <ProgressBar variant="info" now={proposal.stateComment} label='comments'/>
            <ProgressBar striped variant="success" now={proposal.stateDecline} label='Ok director'/>
            </ProgressBar>
        </Card.Body>
    </Card>
    )
}