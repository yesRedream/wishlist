import React, { useContext, useEffect, useState } from 'react';
// import DBContext from '../../context/db';


export default function WishCreate({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  // const db = useContext(DBContext);


  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(title, price);
    setTitle('');
    setPrice(0);
}

  return (
    <div className="add-wish-wrap">
      <form onSubmit={handleSubmit} className="add-wish-form">
        <input className="add-wish-input" 
               type="text" 
               value={title} 
               placeholder="я хочю..." 
               onChange={e => setTitle(e.target.value)}
        />

        <input className="add-wish-price" 
               type="number" 
               value={price} 
               placeholder="price" 
               onChange={e => setPrice(e.target.value)}
        />
        {/* <input type="text" title={title} placeholder="я хочю..." onChange={setTitle}/> */}
      </form>
    </div>

  );
}

