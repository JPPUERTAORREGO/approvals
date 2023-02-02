import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddNewProposalComponent } from "../components/AddProposal/AddNewProposalComponent";
import { AllProposalsView } from "../components/AllProposals/AllProposalsView";
import { Home } from "../components/Home/Home";

export const ProposalsRoutes =()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/proposals" element={<AllProposalsView/>}/>
                <Route path="/add-proposal" element={<AddNewProposalComponent/>}/>
                <Route path="/comment-proposal" element={<h1>aqui va la el comentario de la propuesta</h1>}/>
            </Routes>
        </Router>
    )
}