import React, { useContext } from 'react';
import DBContext from '../../context/db';

export default function Itemslist({match}) {

    console.log(match.params.categoryId);
    const db = useContext(DBContext);
  
    return (
      <div className="a">
        <ul>
           {db.wishes.map(wishes =>
            <li key={wishes.id}>{wishes.title}</li>
           )}
         </ul> 
      </div>
       
          
    );
  }
  
  