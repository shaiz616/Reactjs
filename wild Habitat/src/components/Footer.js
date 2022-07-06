import React from "react";
import '../styles/Footer.css';



export default function Footer() {


    function getCurrYear() {
        let nuYear = new Date()
        return nuYear.getFullYear()
    }


    return(
        <footer className='box'>
                <div className="container">
                <section className='row head'>
                    <h4>Made by</h4>
                    <span>© Shai Zaltzman {getCurrYear()}</span>
                </section>

                <div className="row">
                    <dl className="col">
                        <div className="head">About Us</div>
                        <dt>Aim</dt>
                        <dt>Vision</dt>
                        <dt>Visiters Revivw</dt>
                    </dl>
                    <div className="col">
                        <div className="head">Special services</div>
                        <dt>Singles</dt>
                        <dt>Couples</dt>
                        <dt>Families</dt>
                        <dt>Groups</dt>
                    </div>
                    <div className="col">
                        <div className="head">Contect Information</div>
                        <dt>Aim</dt>
                        <dt>Vision</dt>
                        <dt>Visiters Revivw</dt>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}