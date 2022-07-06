import React from "react";
import { Outlet, Link } from 'react-router-dom';


export default function MyNavbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar light bg-light ">
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/home'  className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/full-list' className="nav-link">To see all animal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/add-animal' className="nav-link">add animal</Link>
                    </li>
                </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}