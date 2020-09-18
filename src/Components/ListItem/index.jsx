import React, { useState, useEffect, useRef } from 'react';

export default function ListItem({wish, onDelete, onSelect}) {
  const [toggleClass, setToggleClass] = useState(false);
    
  function handleClick(event){
    event.stopPropagation();
    onDelete(wish.id);
  }

  function handleClickLink(event){
    event.stopPropagation();
  }

  const getClickableLink = link => {
    return link.startsWith("http://") || link.startsWith("https://") ?
      link
      : `http://${link}`;
  };

  // function handleClickMenu(event) {
  //   event.stopPropagation();
  //   setToggleClass(true);
  // }

  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         setToggleClass(false);
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  return (
    <div className="wish-item-wrap">
      <div className="wish-item" onClick={() => onSelect(wish)}>
        <div className="wish-img-wrap">


          <div className="wish-price-wrap">
            <p className="wish-price">{wish.price}$</p>
          </div>
        </div>
        <p className="wish-name">{wish.title}</p>
        <a rel="noopener noreferrer" href={getClickableLink(wish.link)} target="_blank" onClick={handleClickLink} className="wish-link">{wish.link}</a>
        
        <button className="delete" onClick={handleClick}>{'\u2715'}</button>
        
        {/* <div className="dropdown-wrap">
          <div className="dropdown">
            <div className="dropbtn" onClick={handleClickMenu}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className={`dropdown-content ${toggleClass ? 'active' :''}`}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
      
        
  );
}


