import React, {  } from 'react';

export default function ListItem({wish, onDelete, onSelect}) {
    return (
      <div className="wish-item" onClick={() => onSelect(wish)}>
        <p>{wish.title}</p>
        <div 
          className="delete"
          onClick={() => onDelete(wish.id)}>x</div>
      </div>
       
          
    );
  }
  
  