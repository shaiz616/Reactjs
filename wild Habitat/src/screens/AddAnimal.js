import { push, ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "../components/firebase-config";
import { Link, Outlet } from 'react-router-dom';

export default function AddAnimal( { onFinish } ) {

    
    const [name, setName ] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [legs, setLegs ] = useState(0);
    const [ native, setNative] = useState(false);    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const dbRef = ref(db, 'animal-list');
                const newAnimalRef = push(dbRef);
                set(newAnimalRef, {
                    name: name,
                    category: category,
                    img: img,
                    num_of_legs: legs,
                    is_Israel_native: native 
                });
        } catch(error) {
            console.log(error);
        }
    }

    function handleRadio(e) {
        setCategory(e.target.value);
    }
    
    return(
        <div style={{backgroundColor: 'slategray', padding:10, color:'whitesmoke'}} >
            <h3>add new animal</h3>
            <form onSubmit={handleSubmit}>
                <label>Enter name</label>
                <input type='text' onChange={ (e) => setName(e.target.value)} value={name} className='form-control' />

                <div onChange={handleRadio} >
                    <label>Choose category  </label> 
                    <br />
                    <label>land</label>
                    <input type='radio' defaultChecked={false} name='category' 
                        value='land'  />
                        
                        <label>sea</label>
                    <input type='radio' defaultChecked={false} name='category' 
                        value='sea'  />
                        
                        <label>air</label>
                    <input type='radio' defaultChecked={false} name='category' 
                        value='air'  />
                </div>
                <br />
                <br />                
                <label>Enter image link</label> 
                <textarea onChange={(e) => setImg(e.target.value)} className='form-control' value={img}></textarea>

                
                <label>Enter number of legs</label> 
                <input type='number' onChange={ (e) => setLegs(e.target.value)} value={legs} className='form-control' />

                
                <label>Is it native in Israel?</label> 
                <input type={'text'} onChange={ (e) => setNative(e.target.value)} value={native} className='form-control' />
                
                <Link to='full-list'><button type='submit' className="btn btn-success" onClick={handleSubmit}>Save and submit to add a new animal</button></Link>
            </form>
        </div>
    )
}