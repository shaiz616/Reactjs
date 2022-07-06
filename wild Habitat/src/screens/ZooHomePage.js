import React from "react";



export default function ZooHomePage( { go2Zoo } ) {


    function handleZoo() {
        console.log('hello zoo');
        go2Zoo();
    }


    return (
        <React.Fragment>
            <div className="container2">
                <h1 className="welcome">Welcome to 'Wild Habitat' zoo</h1>
                <h3>to continue to the main part, please</h3>
                <button className="btn btn-primary" onClick={handleZoo}>click here</button>
            </div>
        </React.Fragment>
    )
}