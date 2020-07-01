import React, {  } from 'react';

export default function ItemsListItem({wish, onDelete}) {
    return (
      <div className="wish-item">
        <h4>{wish.title}</h4>
        <div 
          className="delete"
          onClick={() => onDelete(wish.id)}>x</div>
      </div>
       
          
    );
  }
  
  