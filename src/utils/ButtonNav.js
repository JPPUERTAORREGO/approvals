import React from 'react'
import Button from 'react-bootstrap/Button'

export const ButtonNav=(props)=>{
    const {handleNav, goTo} = props
    return(
        <Button variant='outline-secondary' onClick={handleNav}>{goTo}</Button>
    )
}