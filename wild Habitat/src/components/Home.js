import React, { useState } from "react";
import { 
    BrowserRouter as Router, 
    Switch, Routes, Route } from 'react-router-dom';

import MyNavbar from "../navigation/MyNavbar";
import MyRouter from "../navigation/MyRouter";

import Manager from '../screens/ZooManager';
import ZooHomePage from "../screens/ZooHomePage";
import AddAnimal from "../screens/AddAnimal";


export default function Home() {

    const [flag, setFlag] = useState(false);


    return(
        <>
            <Router>
            <MyNavbar />
                <Routes>
                    <Route path='/' element={<ZooHomePage />} />
                    <Route path='/full-list' element={<ZooHomePage />} />
                    <Route path='/full-list' element= {<Manager /> } />
                    <Route path='/add-animal' element={<AddAnimal /> } />
                </Routes>
            </Router>
            {/* {flag ? <MyRouter /> : <ZooHomePage go2Zoo = {() => setFlag(true)} />  } */}
        </>
    )
}


