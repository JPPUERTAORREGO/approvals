import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonNav } from '../../utils/ButtonNav'
import { AllProposalsComponent } from './AllProposalsComponent'

export const AllProposalsView =()=>{

    const navigate = useNavigate()
    const handleAddProposal =()=>{
        navigate('/add-proposal')
    }

    return(        
        <div>
            <AllProposalsComponent/>
            <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>
        </div>
        
    )
}
