import React, {  } from 'react';

export default function ListItem({wish, onDelete, onSelect}) {
    
  function handleClick(event){
    event.stopPropagation();
    onDelete(wish.id);
  }

  return (
    <div className="wish-item-wrap">
      <div className="wish-item" onClick={() => onSelect(wish)}>
        <div className="wish-img-wrap"></div>
        <p className="wish-name">{wish.title}</p>
        <p className="wish-price">{wish.price}</p>
        <p className="wish-link">{wish.link}</p>
        <button className="delete" onClick={handleClick}>{'\u2715'}</button>
      </div>
    </div>
      
        
  );
}


