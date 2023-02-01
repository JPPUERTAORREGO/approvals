import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home =()=>{
    const navigate =useNavigate()

    const handleOnProposals =()=>{
        navigate("/proposals")
    }

    return(
        <button onClick={handleOnProposals}>Go to all proposals</button>
    )
}