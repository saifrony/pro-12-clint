import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';


const Cards = () => {
    const [cards, setCards]=useState([]);
    useEffect(()=>{
            fetch(`http://localhost:5000/sevices`)
            .then(res=>res.json())
            .then(data=>setCards(data))
    }
    ,[])
    return (
        <div className='mt-12'>
            <h2 className='text-2xl text-center'>Laptop Brand: {cards.length}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 mb-12 p-5'>
        {
            cards.map(card=><CardItem key={card.id} card={card}></CardItem>)
        }
        </div>
      </div>

    );
};

export default Cards;