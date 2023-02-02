import React, {useContext, useState} from "react";
import { ProposalCardView } from "../ProposalCard/ProposalCardView";
import { ProposalsContext } from "../../context/ProposalsContext";


export const AllProposalsComponent =(props)=> {    
    const {activateDetail, setActivateDetail} = props
    const {proposals} = useContext(ProposalsContext)
    const [newDetail, setNewDetail] = useState(activateDetail);

    const handleDetail =()=> {
        setNewDetail(!activateDetail)
        setActivateDetail(newDetail)
    }

    return(
        proposals.map(
            proposal=><ProposalCardView
        key = {proposal.id}
        nameIdea = {proposal.nameIdea} 
        area = {proposal.area}
        oven = {proposal.oven}
        handleDetail = {handleDetail}
        />)

    )
}

