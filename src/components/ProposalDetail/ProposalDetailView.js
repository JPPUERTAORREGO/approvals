import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { ProgressBar } from 'react-bootstrap'
import { CommentsForm } from '../Comments/CommentsForm'
import styles from './styleDetail.module.css'

export const ProposalDetailView =({proposal, handleAproved, handleComment, showCommentInput, handleSendComment, commmentText})=> {
    console.log(proposal)

    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>{proposal.nameIdea}</h2>
                <p>{proposal.id}</p>
                <p>{proposal.description}</p>
                <h2>{proposal.cost}</h2>
                <h3>{proposal.area}-{proposal.oven}</h3>
                <h3>jefe {proposal.boss}</h3>
            </div>
            <div className={styles.progress}>
                <ProgressBar>
                <ProgressBar striped variant="danger" now={proposal.stateCreate} label='propuesta'/>
                <ProgressBar variant="warning" now={proposal.stateAproved} label='Ok jefe'/>
                <ProgressBar variant="info" now={proposal.stateComment} label='comments'/>
                <ProgressBar striped variant="success" now={proposal.stateDecline} label='Ok director'/>
                </ProgressBar>
            </div>
            <div className={styles.actions}>
                <Button variant="outline-primary" onClick={()=>handleAproved(proposal)}>Aprobar</Button>
                <Button variant="outline-warning" onClick={()=>handleComment(proposal)}>Comentar</Button>
                <Button variant="outline-danger">Rechazar</Button>
            </div>

            {showCommentInput 
            ?<div className={styles.commentForm}>
                <CommentsForm handleSendComment = {handleSendComment}
                    proposal = {proposal}
                    commmentText={commmentText}
                />
            </div>
            :<p></p>}
            <div className={styles.commentsContainer}>
                <div className={styles.comment}>
                <h3>Comment boss</h3>
                <p>{proposal.comments.bossComment}</p>
                </div>
                <div className={styles.comment}>
                <h3>Comment director</h3>
                <p>aqui van los comentarios del director</p>
                </div>

            </div>
        </div>
    )
}