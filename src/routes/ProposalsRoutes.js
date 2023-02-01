import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";

export const ProposalsRoutes =()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/proposals" element={<h1>aqui van todas las propuestas</h1>}/>
                <Route path="/add-proposal" element={<h1>aqui va el formulario de agregar propuesta</h1>}/>
                <Route path="/comment-proposal" element={<h1>aqui va la el comentario de la propuesta</h1>}/>
            </Routes>
        </Router>
    )
}