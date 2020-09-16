import React, {  } from 'react';

export default function ListItem({wish, onDelete, onSelect}) {
    
  function handleClick(event){
    event.stopPropagation();
    onDelete(wish.id);
  }

  return (
    <div className="wish-item" onClick={() => onSelect(wish)}>
      <p>{wish.title}</p>
      <h1>{wish.price}</h1>
      <div 
        className="delete"
        // onClick={() => onDelete(wish.id)}>x</div>
        onClick={handleClick}>x</div>

    </div>
      
        
  );
}


