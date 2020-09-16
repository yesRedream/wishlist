import React, { useContext, useEffect, useState } from 'react';
import DBContext from '../../context/db';
import WishCreate from '../WishCreate';
import ListItem from '../ListItem';
import ListItemEdit from '../ListItemEdit';
import { db } from '../../firebase';

export default function Itemslist({match}) {
    const [selectedWish, setSelectedWish] = useState(null);
    const [wishes , setWishes] = useState([]);

    const db2 = useContext(DBContext);

    function getWishesSubscribe() {
      return db.collection('wishes')
          // .where('categoryId', '==', '')
        .onSnapshot(snapshot => {
          const items = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
          }));
          setWishes(items);
        });
    }

    function getCategoryWishes(listId) {
      return db.collection('wishes')
          .where('categoryId', 'array-contains', listId)
          .onSnapshot(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setWishes(items);
          });        
    }

    
    useEffect(() => {
      if (match.params.categoryId === 'all' || match.params.categoryId === undefined) {
        // db2.getWishes()
        // .then(setWishes);
        getWishesSubscribe();
      } else if (match.params.categoryId) {
        // db2.getCategoryWishes(match.params.categoryId)
        //   .then(setWishes);
        getCategoryWishes(match.params.categoryId);

      } 
    // }, [db2, match.params.categoryId]);
    }, [match.params.categoryId]);

    function handleSubmit(title, price, link) {
      if (match.params.categoryId === 'all' || match.params.categoryId === undefined) {
        db2.createWish({
          title, price, link
        }).then(wish => {
          setWishes([...wishes, wish])
        });
      } else if (match.params.categoryId) {
        db2.createWish({
          title, price, link,
          categoryId: [category.id]
        }).then(wish => {
          setWishes([...wishes, wish])
        });
      }
    }

    function handleDelete(wishId) {
      db2.deleteWish(wishId).then(wishId => {
        setWishes([...wishes.filter(w => w.id !== wishId)])
      });
    }

    function handleSelect(wish) {
      setSelectedWish(wish);
    }

    function handleUpdate(wishId, data) {
      // console.log(wishId, data);
      db2.updateWish(wishId, data);

    }
 


    // function setCategoryTitle(){
    //   const category = db2.categories.find(category => category.id === match.params.categoryId);
    //   if (!category || category === 'all')
    //     return 'All';
    //   return category.title;
      
    // }

    const category = db2.categories.find(category => category.id === match.params.categoryId);
    
    // if (!category || category === 'all') 
    //   return  (
    //     <div className="items-list">
    //       <h1>All</h1>
    //       <WishCreate onSubmit={handleSubmit}></WishCreate>
    //       <div className="items-list-wrap">
    //         {wishes.map(wish =>
    //           <ListItem 
    //             key={wish.id}
    //             wish={wish}
    //             // wishId={wish.id} 
    //             // wishTitle={wish.title}
    //             onDelete={handleDelete}
    //             onSelect={handleSelect}
    //           />
    //         )}
    //       </div> 

          
    //       {selectedWish &&
    //       <div className={(selectedWish && 'active list-item-edit-wrap') || 'list-item-edit-wrap'}>
    //         <div className="list-item-background" onClick={() => setSelectedWish(null)}></div>
    //         <ListItemEdit
    //           onUpdate={handleUpdate}
    //           wish={selectedWish}  
    //         />
    //       </div>}

    //     </div>);

    return (
      <div className="items-list">
        {/* <h1>{category.title}</h1> */}
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
  
  