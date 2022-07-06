import React, { useState } from "react";
import '../styles/Card.css';


export default function Card( { id, name, category, img } ) {

    const [ edit, setEdit ] = useState(false);

    return (
        <section className='dark' >
            <div className='container py-4'>

                <article className='postcard dark blue'>
                    <img className='postcard_img'  src={img} alt={`${name} image not found`} />

                    <div className='postcard_text'>
                        <h2 className='blue' style={{fontSize: '1.75rem'}}>{name}</h2>
                        <div className='postcard_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                            fugiat asperiores inventore beatae accusamus odit minima enim,
                            commodi quia, doloribus eius!
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
