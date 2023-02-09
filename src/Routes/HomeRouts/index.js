import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../../Screen';


const HomeRouts = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default HomeRouts