import React from 'react'
import Button from 'react-bootstrap/Button'


export const ProposalDetailView =({proposal})=> {
    const { 
        id,
        nameIdea, 
        description,
        cost,
        boss,
        area,
        oven,
        state ,
        } = proposal

    return(
        <div>
            <h1>{id} - {nameIdea}</h1>
            <p>{description}</p>
            <h2>{cost}</h2>
            <h3>{area}-{oven}</h3>
            <h3>jefe {boss}</h3>
            <h3>{state}</h3>
            <div className='d-flex justify-content-around'>
                <Button variant="outline-primary">Aprobar</Button>
                <Button variant="outline-warning">Comentar</Button>
                <Button variant="outline-danger">Rechazar</Button>
            </div>
        </div>
    )
}

/*
id:Date.now(),
            nameIdea : nameIdea,
            description : description,
            cost : cost,
            boss : selectBoss,
            area : area,
            oven : oven,
            state : 'pending',
            viewDetail : false
            
            */