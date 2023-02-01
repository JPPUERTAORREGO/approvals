import React, {useState, useContext} from 'react'
import { ProposalsContext } from '../../context/ProposalsContext';
import { AddNewProposalForm } from './AddNewProposalForm'
import { useNavigate } from 'react-router-dom';

export const AddNewProposalComponent =()=> {
    const [nameIdea, setNameIdea] = useState("")
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const {proposals, setProposals} = useContext(ProposalsContext)

    const navigate = useNavigate()


    const onChangeName =(e)=> {
        setNameIdea(e.target.value)
        
    }

    const onChangeDescription =(e)=> {
        setDescription(e.target.value)
    }

    const onChangeCost =(e)=> {
        setCost(e.target.value)
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        const newProposal ={
            id:Date.now(),
            nameIdea:nameIdea,
            description:description,
            cost:cost
        }

        setProposals([newProposal,...proposals])    
        console.log('clicked', newProposal)
        console.log('context', proposals)
        navigate('/proposals')

    }


    return (
        <AddNewProposalForm
        onChangeName = {onChangeName}
        onChangeDescription = {onChangeDescription}
        onChangeCost = {onChangeCost}
        handleSubmit = {handleSubmit}
        />
    )
}

//onChangeName, onChangeDescription, onChangeCost, handleSubmit