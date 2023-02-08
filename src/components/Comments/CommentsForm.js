import React from 'react'
import Button from 'react-bootstrap/Button'

export const CommentsForm =({handleSendComment, proposal, commmentText})=> {

    return(
        <>
        <textarea style={{width:'100%', height:'100px'}} onChange={commmentText} type="area" placeholder="Enter comment"></textarea>
        <Button onClick={()=>handleSendComment(proposal)} variant="secondary">
            Comment
        </Button>

    </>
    )
}