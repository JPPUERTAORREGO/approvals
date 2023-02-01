import React, {createContext, useState} from "react";

export const ProposalsContext = createContext()

export const ProposalsContextProvider =({children})=>{
    const [proposals, setProposals] = useState([]);
    const contextValues = {proposals, setProposals}
    return(
        <ProposalsContext.Provider value={contextValues}>
            {children}
        </ProposalsContext.Provider>
    )
}