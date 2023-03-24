import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/Header.js"
import Home from '../components/Home.js';
import View from '../components/View.js';

const SharesPortfolio = ()=>{
    const [user, setUser] = useState({
        name: "Millicent Moneybags",
        shareValues: [
            {
                stockSymbol: "AAPL",
                numshares: 120,
                averagePricePaid: 35,
                currentMarketValue: 125
            },
            {
                stockSymbol: "IBM",
                numshares: 120,
                averagePricePaid: 35,
                currentMarketValue: 125
            }
        ]
    });


    return(
        <Router>
            <Header user={user}/>
            <Routes>
                <Route path="/" element={<Home user={user}/>}/>
                <Route path="/view" element={<View user={user}/>}/>
            </Routes>
            <footer>
                <h3>Footer</h3>
            </footer>
        </Router>
    )
};
export default SharesPortfolio;