import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonNav } from '../../utils/ButtonNav'
import { ProposalDetail } from '../ProposalDetail/ProposalDetail'
import { AllProposalsComponent } from './AllProposalsComponent'

export const AllProposalsView =()=>{
    const [activateDetail, setActivateDetail] = useState(false);
    const navigate = useNavigate()
    const handleAddProposal =()=>{
        navigate('/add-proposal')
    }

    console.log("activate detail",activateDetail)

    if (!activateDetail) {
            return(  
        <>  
        <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>  
        <div className='d-flex justify-content-between '>
            <div className='d-flex justify-content-between '>
                <AllProposalsComponent setActivateDetail={setActivateDetail} activateDetail={activateDetail}/>                 
            </div>             
            <ProposalDetail/>      
        </div>
        
        </> 
    )
    }
    else{
        return(  
            <>  
            <ButtonNav handleNav={handleAddProposal}goTo='add a new proposal'/>  
            <div >
                <div className='d-flex justify-content-between '>
                    <AllProposalsComponent setActivateDetail={setActivateDetail} activateDetail={activateDetail}/> 
                </div>  
             </div>
            
            </> 
        )
    }


}
