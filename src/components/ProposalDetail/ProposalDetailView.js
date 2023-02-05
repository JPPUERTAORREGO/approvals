import React from 'react'
import Button from 'react-bootstrap/Button'
import { ProgressBar } from 'react-bootstrap'

export const ProposalDetailView =({proposal, handleAproved})=> {

    return(
        <div>
            <div>

                <h2>{proposal.id} - {proposal.nameIdea}</h2>
                <p>{proposal.description}</p>
                <h2>{proposal.cost}</h2>
                <h3>{proposal.area}-{proposal.oven}</h3>
                <h3>jefe {proposal.boss}</h3>
            </div>
            <div>
                <h3>Progress</h3>
                <ProgressBar>
                <ProgressBar striped variant="danger" now={proposal.stateCreate} label='propuesta'/>
                <ProgressBar variant="warning" now={proposal.stateAproved} label='Ok jefe'/>
                <ProgressBar variant="info" now={proposal.stateComment} label='comments'/>
                <ProgressBar striped variant="success" now={proposal.stateDecline} label='Ok director'/>
                </ProgressBar>
            </div>
            <h3>actions</h3>
            <div className=' d-flex m-50 justify-content-around'>
                <Button variant="outline-primary" onClick={()=>handleAproved(proposal)}>Aprobar</Button>
                <Button variant="outline-warning">Comentar</Button>
                <Button variant="outline-danger">Rechazar</Button>
            </div>
        </div>
    )
}