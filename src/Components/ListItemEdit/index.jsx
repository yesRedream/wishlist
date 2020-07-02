import React, {  } from 'react';

export default function ListItemEdit({wish}) {
    return (
      <div className="wish-item-edit">
        <input value={wish && wish.title}></input>
      </div>
       
          
    );
  }
  
  