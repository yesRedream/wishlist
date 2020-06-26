import React, { useContext, useEffect, useState } from 'react';
import DBContext from '../../context/db';

export default function Itemslist({match}) {

    const [wishes, setWishes] = useState([]);

    const db = useContext(DBContext);
    useEffect(() => {
      if (match.params.categoryId === 'all' || match.params.categoryId === undefined) {
        db.getWishes()
        .then(setWishes);
      } else if (match.params.categoryId) {
        db.getCategoryWishes(match.params.categoryId)
          .then(setWishes);
      } 
    }, [db, match.params.categoryId]);

    const category = db.categories.find(category => category.id === match.params.categoryId);
    if (!category || category === 'all') 
      return  (
        <div className="a">
        <h1>All</h1>
          <div>
            {wishes.map(wish =>
              <div key={wish.id}>{wish.title}</div>
            )}
          </div> 
        </div>);

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
  
  