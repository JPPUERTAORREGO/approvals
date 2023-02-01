import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ProposalsContext } from '../../context/ProposalsContext'
import { ButtonNav } from '../../utils/ButtonNav'

export const AllProposals =()=>{
    const {proposals} = useContext(ProposalsContext)
    console.log('desde todas las propuestas',proposals)

    const navigate = useNavigate()
    const handleAddProposal =()=>{
        navigate('/add-proposal')
    }


    return(        
        <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>
    )
}
