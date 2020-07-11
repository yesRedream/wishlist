import React, { useState } from 'react';

export default function ListItemEdit({wish, onUpdate}) {
  // const [title, setTitle] = useState(wish && wish.title);
  const [title, setTitle] = useState( wish.title);
  // const db = useContext(DBContext);
  console.log(title);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdate(wish.id, title);
    console.log(wish.id, title);

    // setTitle(wish && wish.title);
  }

    return (
      <div className="edit-wish-item">
        {/* <div>{wish.title}</div> */}
        <form onSubmit={handleSubmit} className="edit-wish-form">
          {/* <input defaultValue={wish && wish.title} value={title}></input> */}
          <input className="edit-wish-input" 
                 value={title} 
                 onChange={e => setTitle(e.target.value)}
                 ref={input => input && input.focus()}
          />
        </form>
        {/* <input value={wish && wish.title}></input> */}
      </div>
       
          
    );
  }
  
  