import React, { useState,  useEffect } from 'react';
import { get } from '../../api';

export default function Itemslist() {

    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      get('wishes').then(setCategories);
    }, [])
  
    return (
      <div className="a">
        <ul>
           {categories.map(wishes =>
            <li key={wishes.id}>{wishes.title}</li>
           )}
         </ul> 
      </div>
       
          
    );
  }
  
  