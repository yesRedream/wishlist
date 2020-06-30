import React, { useContext, useEffect, useState } from 'react';
import DBContext from '../../context/db';
import WishCreate from '../WishCreate';
import ItemsListItem from '../ItemslListItem';

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

    function handleSubmit(title) {
      if (match.params.categoryId === 'all' || match.params.categoryId === undefined) {
        db.createWish({
          title
        }).then(wish => {
          setWishes([...wishes, wish])
        });
      } else if (match.params.categoryId) {
        db.createWish({
          title,
          categoryId: [category.id]
        }).then(wish => {
          setWishes([...wishes, wish])
        });
      }
    }

    const category = db.categories.find(category => category.id === match.params.categoryId);
    if (!category || category === 'all') 
      return  (
        <div className="a">
        <h1>All</h1>
        <WishCreate onSubmit={handleSubmit}></WishCreate>
          <div>
            {wishes.map(wish =>
            <ItemsListItem wishId={wish.id} wishTitle={wish.title}/>


              // <div key={wish.id}>{wish.title}</div>
            )}
          </div> 
        </div>);

    return (
      <div className="a">
        <h1>{category.title}</h1>
        <WishCreate onSubmit={handleSubmit}></WishCreate>
        <div>
           {wishes.map(wish =>
            // <div key={wish.id}>{wish.title}</div>
            <ItemsListItem wishId={wish.id} wishTitle={wish.title}/>

           )}
         </div> 
      </div>
       
          
    );
  }
  
  