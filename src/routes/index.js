import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Homepage, Product } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/product' element={<Product />}/>
            <Route path='/about' element={<About />}/>
        </Routes>
    );
};

export default Router;
