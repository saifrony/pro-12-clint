import React from 'react';

const CardItem = ({card}) => {
    const {img,name,}=card;
    const {brand_name}=card.category;
    console.log(card.category)
    return (
            
                
             <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
                   {name}
           </h2>
           <div className="card-actions justify-center">
           <button className="btn btn-success">Details</button>
           </div>
           <p className='text-red-900'>{brand_name}</p>
         </div>
         </div>
          
       
    );
};

export default CardItem;