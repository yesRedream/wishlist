import React, { useContext, useEffect, useState } from 'react';
import DBContext from '../../context/db';

export default function Itemslist({match}) {

    const [wishes, setWishes] = useState([]);

    const db = useContext(DBContext);
    useEffect(() => {
      db.get('wishes')(collection => 
        collection.where('categoryId', 'array-contains', match.params.categoryId)
        )
        .then(setWishes);
    }, [db, match.params.categoryId]);
    

    const category = db.categories.find(category => category.id === match.params.categoryId);
    if (!category) return <div></div>;

    return (
      <div className="a">
        <h1>{category.title}</h1>
        <div>
           {wishes.map(wish =>
            <div key={wish.id}>{wish.title}</div>
           )}
         </div> 
      </div>
       
          
    );
  }
  
  