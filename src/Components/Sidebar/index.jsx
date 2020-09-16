import React from 'react';
import { NavLink } from 'react-router-dom'; 

export default function Sidebar({ categories }) {


  return (
    <div className="sidebar">
      <div className="categories-list">
        <h2>Category</h2>
        <div className="category">
          
            <input type="radio" id="all" name="category"></input>
            <NavLink className="navlink" to="/all">
              <label className="category-label" htmlFor="all">
                All
              </label>
            </NavLink>
         </div>
         {categories.map(categories =>
         <div className="category" key={categories.id}>
           <input type="radio" id={categories.id} name="category"></input>
           <NavLink className="navlink" to={categories.id}>
            <label className="category-label" htmlFor={categories.id}>
              {categories.title}
              </label>
            </NavLink>
         </div>
         )}
      </div>
    </div>
  );
}

