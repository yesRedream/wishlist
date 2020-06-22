import React, { useState,  useEffect } from 'react';

export default function Itemslist({wishes}) {
  
    return (
      <div className="a">
        <ul>
           {wishes.map(wishes =>
            <li key={wishes.id}>{wishes.title}</li>
           )}
         </ul> 
      </div>
       
          
    );
  }
  
  