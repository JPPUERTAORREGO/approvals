import React from 'react'
import { useNavigate } from 'react-router-dom'
import {ButtonNav} from '../../utils/ButtonNav'

export const Home =()=>{
    const navigate =useNavigate()

    const handleOnProposals =()=>{
        navigate("/login")
    }

    return(
        <>
        <ButtonNav 
        handleNav={handleOnProposals}
        goTo={'proposals'}
        />
        </>

    )
}