import React, { useContext, useEffect, useState } from 'react';
// import DBContext from '../../context/db';


export default function WishCreate({ onSubmit }) {
  const [title, setTitle] = useState('');
  // const db = useContext(DBContext);


  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(title);
    setTitle('');
}

  return (
    <form onSubmit={handleSubmit} className="add-wish-form">
      <input className="create-wish-input" type="text" value={title} placeholder="я хочю..." onChange={e => setTitle(e.target.value)}/>
      {/* <input type="text" title={title} placeholder="я хочю..." onChange={setTitle}/> */}
    </form>
  );
}

