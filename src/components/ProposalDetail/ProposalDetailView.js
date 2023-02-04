import React from 'react'


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
            <h3>{boss}</h3>
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