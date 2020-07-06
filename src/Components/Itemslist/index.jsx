import React, { useContext, useEffect, useState } from 'react';
import DBContext from '../../context/db';
import WishCreate from '../WishCreate';
import ListItem from '../ListItem';
import ListItemEdit from '../ListItemEdit';

export default function Itemslist({match}) {
    const [selectedWish, setSelectedWish] = useState(null);
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

    function handleDelete(wishId) {
      db.deleteWish(wishId).then(wishId => {
        setWishes([...wishes.filter(w => w.id !== wishId)])
      });
    }

    function handleSelect(wish) {
      setSelectedWish(wish);
    }

    function handleUpdate(wishId, data) {
      // console.log(wishId, data);
      db.updateWish(wishId, data);
    }
 


    // function setCategoryTitle(){
    //   const category = db.categories.find(category => category.id === match.params.categoryId);
    //   if (!category || category === 'all')
    //     return 'All';
    //   return category.title;
      
    // }

    const category = db.categories.find(category => category.id === match.params.categoryId);
    if (!category || category === 'all') 
      return  (
        <div className="items-list">
          <h1>All</h1>
          <WishCreate onSubmit={handleSubmit}></WishCreate>
          <div className="items-list-wrap">
            {wishes.map(wish =>
              <ListItem 
                key={wish.id}
                wish={wish}
                // wishId={wish.id} 
                // wishTitle={wish.title}
                onDelete={handleDelete}
                onSelect={handleSelect}
              />
            )}
          </div> 

          
          {selectedWish &&
          <div className={(selectedWish && 'active list-item-edit-wrap') || 'list-item-edit-wrap'}>
            <div className="list-item-background" onClick={() => setSelectedWish(null)}></div>
            <ListItemEdit
              onUpdate={handleUpdate}
              wish={selectedWish}  
            />
          </div>}

        </div>);

    return (
      <div className="items-list">
        <h1>{category.title}</h1>
        <WishCreate onSubmit={handleSubmit}></WishCreate>
        <div className="items-list-wrap">
           {wishes.map(wish =>
            <ListItem 
              key={wish.id}
              wish={wish}
              // wishId={wish.id} 
              // wishTitle={wish.title}
              onDelete={handleDelete}
              onSelect={handleSelect}
            />

           )}
         </div> 
         {selectedWish &&
          <div className={(selectedWish && 'active list-item-edit-wrap') || 'list-item-edit-wrap'}>
            <div className="list-item-background" onClick={() => setSelectedWish(null)}>
            
            </div>
            <ListItemEdit
              onUpdate={handleUpdate}
              wish={selectedWish}  
            />
          </div>
          }

         {/* {selectedWish &&
            <div className="list-item-edit-wrap" >
              <div className="list-item-background" onClick={() => setSelectedWish(null)}></div>
              <ListItemEdit
                wish={selectedWish}  
              />
            </div>
         } */}
      </div>
       
          
    );
  }
  
  