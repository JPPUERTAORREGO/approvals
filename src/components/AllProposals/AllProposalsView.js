import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ProposalsContext } from '../../context/ProposalsContext'
import { ButtonNav } from '../../utils/ButtonNav'
import { ProposalCardView } from '../ProposalCard/ProposalCardView'
import { ProposalDetailView } from '../ProposalDetail/ProposalDetailView'
import styles from './styleAllProposal.module.css'


export const AllProposalsView =()=>{
    const {proposals} = useContext(ProposalsContext)
    const [proposalDetail, setProposalDetail] = useState({})
    const [showDetail, setShowDetail] = useState (false)
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [inputTextComment, setInputTextComment] = useState('')

    const handleAproved =(proposal)=> {
    proposal.stateAproved=25    
    setShowDetail(!showDetail)    
    }

    const navigate = useNavigate()

    const handleAddProposal =()=>{
        navigate('/add-proposal')
    }

    const commmentText =(e)=> {
        setInputTextComment(e.target.value)
    }

    const handleComment =(proposal)=> {
        setShowCommentInput(!showCommentInput)       

    }

    const handleSendComment =(proposal)=> {
        proposal.stateComment=25 
        setShowCommentInput(!showCommentInput)
        setShowDetail(!showDetail)
        proposal.comments.bossComment=inputTextComment
        console.log('click from comment', proposal)
    }

    const handleDetail =(proposal) => {
        setProposalDetail(proposal)
        setShowCommentInput(false)
        setShowDetail(!showDetail)

    }

    if (showDetail) {
        return(  
            <div className={styles.container}>  
            <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>  
            <div className='d-flex justify-content-between'>
                <div className={styles.listProposals}>
                {proposals.map(proposal=>
                <ProposalCardView
                    key = {proposal.id}
                    proposal = {proposal}
                    handleDetail = {handleDetail}
                />)}                              
                </div>    
                <div className={styles.detail}>
                    <ProposalDetailView proposal = {proposalDetail}
                    handleAproved = {handleAproved}
                    handleComment = {handleComment}
                    showCommentInput = {showCommentInput}
                    handleSendComment = {handleSendComment}
                    commmentText = {commmentText}
                    />
                </div>           
                  
            </div>
            
            </div> 
        )
    }

    else{
        return(  
            <div className={styles.container}>  
            <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>  
            <div>
                <div className={styles.listProposals}>
                {proposals.map(proposal=>
                <ProposalCardView
                    key = {proposal.id}
                    proposal = {proposal}
                    handleDetail = {handleDetail}
                />)}            
                </div>           
   
            </div>
            
            </div> 
        )
    }


    
    }
