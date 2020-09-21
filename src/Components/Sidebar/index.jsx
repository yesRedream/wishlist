import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import { db, auth } from '../../firebase';


export default function Sidebar() {
  const [categories , setCategories] = useState([]);
  const [title , setTitle] = useState('');


  function getCategoriesSubscribe() {
    return db.collection('categories')
      .where('owner', '==', auth().currentUser.uid)
      .onSnapshot(snapshot => {
        const items = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setCategories(items);
      });
  }

  useEffect(() => {
    getCategoriesSubscribe();
  // }, [db2, match.params.categoryId]);
  }, []);


  function createCategory(title) {
    const owner = auth().currentUser ? auth().currentUser.uid : 'unknown';
    return db.collection('categories').add({
        title, owner
    });
        // .then(docRef => docRef.get())
        // .then(doc => ({
        //     id: doc.id,
        //     title: title
        //     // ...doc.data()
        // }));
}

  function updateCategory(categoryId, data) {
    //   console.log(wishId, data);
    return db.collection('categories').doc(categoryId).update({'title': data});
  }

   function deleteCategory(categoryId) {
    return db.collection('categories').doc(categoryId).delete()
        .then(() => categoryId);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (title) {
      createCategory(title);
      setTitle('');
    }
  }

  function handleClick(category){
    // event.stopPropagation();
    deleteCategory(category);
  }

  return (
    <div className="sidebar">
      <div className="categories-list">
        {/* <h2>Category</h2> */}
        <div className="category">
            <input type="radio" id="all" name="category"></input>
            <NavLink className="navlink" to="/all">
              <label className="category-label" htmlFor="all">
                All
              </label>
            </NavLink>
         </div>
         {categories.map(category =>
         <div className="category" key={category.id}>
           <input type="radio" id={category.id} name="category"></input>
           <NavLink className="navlink" to={category.id}>
              <label className="category-label" htmlFor={category.id}>
                {category.title}
                <button className="delete" onClick={() => handleClick(category.id)}>{'\u2715'}</button>
              </label>
            </NavLink>
         </div>
         )}
         {/* <div className="category">
            <input type="radio" id="all" name="category"></input>
            <NavLink className="navlink" to="/Bought">
              <label className="category-label" htmlFor="all">
                Already bought
              </label>
            </NavLink>
         </div> */}
         <div className="add-category">
           <form onSubmit={handleSubmit}>
            <input type="text" 
                   placeholder="Add Category"
                   value={title}
                   required
                   onChange={e => {
                     e.stopPropagation();
                     setTitle(e.target.value);
            }}/>

            <input type="submit" 
                   value={'\u002B'} 
                   className="submit"/>
           </form>
         </div>
      </div>
    </div>
  );
}

