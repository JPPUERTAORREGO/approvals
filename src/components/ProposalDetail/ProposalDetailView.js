import React from 'react'
import Button from 'react-bootstrap/Button'
import { ProgressBar } from 'react-bootstrap'

export const ProposalDetailView =({proposal})=> {
    return(
        <div>
            <h1>{proposal.id} - {proposal.nameIdea}</h1>
            <p>{proposal.description}</p>
            <h2>{proposal.cost}</h2>
            <h3>{proposal.area}-{proposal.oven}</h3>
            <h3>jefe {proposal.boss}</h3>
            <ProgressBar className='p-10'>
            <ProgressBar striped variant="danger" now={proposal.stateCreate} label='propuesta'/>
            <ProgressBar variant="warning" now={proposal.stateAproved} label='Ok jefe'/>
            <ProgressBar variant="info" now={proposal.stateComment} label='comments'/>
            <ProgressBar striped variant="success" now={proposal.stateDecline} label='Ok director'/>
            </ProgressBar>
            <div className='d-flex justify-content-around'>
                <Button variant="outline-primary">Aprobar</Button>
                <Button variant="outline-warning">Comentar</Button>
                <Button variant="outline-danger">Rechazar</Button>
            </div>
        </div>
    )
}