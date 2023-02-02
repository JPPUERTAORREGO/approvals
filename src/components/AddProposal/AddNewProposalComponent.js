import React, {useState, useContext} from 'react'
import { ProposalsContext } from '../../context/ProposalsContext';
import { AddNewProposalForm } from './AddNewProposalForm'
import { useNavigate } from 'react-router-dom';

export const AddNewProposalComponent =()=> {
    const [nameIdea, setNameIdea] = useState("")
    const [description, setDescription] = useState('');
    const [cost, setCost] = useState('');
    const [selectBoss, setSelectBoss] = useState('');
    const [area, setArea] = useState('');
    const [oven, setOven] = useState('');
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

    const handleSelectBoss =(e)=> {
        setSelectBoss(e.target.value)
    }

    const handleArea =(e)=> {
        setArea(e.target.value)
    }

    const handleOven =(e)=> {
        setOven(e.target.value)
    }

    const handleCancel =()=> {
        navigate('/proposals')
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        const newProposal ={
            id:Date.now(),
            nameIdea : nameIdea,
            description : description,
            cost : cost,
            boss : selectBoss,
            area : area,
            oven : oven,
            state : 'pending'
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
        selectBoss = {handleSelectBoss}
        handleCancel = {handleCancel}
        handleArea = {handleArea}
        handleOven = {handleOven}
        />
    )
}

//onChangeName, onChangeDescription, onChangeCost, handleSubmit