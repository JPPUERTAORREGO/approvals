import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ProposalsContext } from '../../context/ProposalsContext'
import { ButtonNav } from '../../utils/ButtonNav'
import { ProposalCardView } from '../ProposalCard/ProposalCardView'
import { ProposalDetailView } from '../ProposalDetail/ProposalDetailView'


export const AllProposalsView =()=>{
    const {proposals} = useContext(ProposalsContext)
    const [proposalDetail, setProposalDetail] = useState({});
    const [showDetail, setShowDetail] = useState (false)
    const navigate = useNavigate()

    const handleAddProposal =()=>{
        navigate('/add-proposal')
    }

    const handleDetail =(proposal) => {
        setProposalDetail(proposal)
        setShowDetail(!showDetail)

    }

    if (showDetail) {
        return(  
            <>  
            <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>  
            <div className='d-flex justify-content-between '>
                <div className='d-flex justify-content-between '>
                {proposals.map(proposal=>
                <ProposalCardView
                    key = {proposal.id}
                    proposal = {proposal}
                    handleDetail = {handleDetail}
                    showDetail = {showDetail}
                />)}  
                <ProposalDetailView proposal = {proposalDetail}/>              
                </div>             
                  
            </div>
            
            </> 
        )
    }

    else{
        return(  
            <>  
            <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>  
            <div className='d-flex justify-content-between '>
                <div className='d-flex justify-content-between '>
                {proposals.map(proposal=>
                <ProposalCardView
                    key = {proposal.id}
                    proposal = {proposal}
                    handleDetail = {handleDetail}
                />)}            
                </div>           
   
            </div>
            
            </> 
        )
    }


    
    }
