import React, { useState } from 'react';

export default function ListItemEdit({wish, onUpdate}) {
  // const [title, setTitle] = useState(wish && wish.title);
  const [title, setTitle] = useState( wish.title);
  const [price, setPrice] = useState( wish.price);
  const [link, setLink] = useState( wish.link);
  // const db = useContext(DBContext);
  console.log(title);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdate(wish.id, title, price, link);

    console.log(wish.id, title);

    // setTitle(wish && wish.title);
  }

    return (
      <div className="edit-wish-item">
        {/* <div>{wish.title}</div> */}
        <form onSubmit={handleSubmit} className="edit-wish-form">
          {/* <input defaultValue={wish && wish.title} value={title}></input> */}
          <input className="edit-wish-input edit-name" 
                 value={title} 
                 onChange={e => setTitle(e.target.value)}
                //  ref={input => input && input.focus()}
          />

          <input className="edit-wish-input edit-price" 
                 value={price} 
                 onChange={e => setPrice(e.target.value)}
                //  ref={input => input && input.focus()}
          />

          <input className="edit-wish-input edit-link" 
                 value={link} 
                 onChange={e => setLink(e.target.value)}
                //  ref={input => input && input.focus()}
          />

          <input type="submit" name="" id=""/>
        </form>
        {/* <input value={wish && wish.title}></input> */}
      </div>
       
          
    );
  }
  
  