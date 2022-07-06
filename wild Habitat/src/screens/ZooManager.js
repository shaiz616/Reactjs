import { get, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { db } from '../components/firebase-config';


export default function ZooManager() {


    const [ animals, setAnimals] = useState([]);
    const [ count, setCount] = useState(0);
    const [ readFlag, setReadflag ] = useState(false);
    // const [ addAnimal, setAddAnimal] = useState(false);

    const zooStyle = {
        color: 'white',
        backgroundColor:'navy'
    };
    const box = {
        width: '50px',
        height: '50px'
    }
    async function fetchAnimalList() {
        setCount(count +1);
        const zooRef = await ref(db, 'animal-list');
        await onValue(zooRef, (snapshot) => {
            let response = [];
            snapshot.forEach(child => {
                let key = child.key;
                let data = child.val();
                response.push({'key' : key, 'data' :data});
            } );
            console.log(response);
            setAnimals(response)
            setReadflag(true);
            
        } );
    }


    useEffect( () => {
        if(!readFlag) {
            fetchAnimalList()
        }
        console.log(animals);
    }, [readFlag] );

    // console.log(animals);
    console.log(count);
    return(
        <section style={{background:'darksalmon'}}>
            <div className='container py-4'>
                <h2 className='h2 text-center' id='pageTitle'>WILD HABITAT complete list</h2>

                {animals.length>0 && animals.map(head =>(
                    <div key={head.key} >
                        <Card 
                            id = {head.id}
                            name = {head.data.name}
                            category = {head.data.category}
                            img = {head.data.img}
                        />
                    </div>
                ) ) }
            </div>
        </section>
    )
}