import React, { useState, useEffect, useRef } from 'react';
// import DBContext from '../../context/db';


export default function WishCreate({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  // const db = useContext(DBContext);
  const [toggleClass, setToggleClass] = useState(false);

  function handleClick() {
    setToggleClass(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(price);
    if (title) {
      onSubmit(title, price, link);
      setTitle('');
      setPrice('');
      setLink('');
      setToggleClass(false);
    }
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleClass(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="add-wish-wrap">
      <form ref={wrapperRef} onSubmit={handleSubmit}  onClick={handleClick} className={`add-wish-form ${toggleClass ? 'active' :''}`}>
        <input className="add-wish-input" 
               type="text" 
               value={title} 
               placeholder="I want..." 
               onChange={e => setTitle(e.target.value)}
        />

        <input className="add-wish-price" 
               type="number" 
               value={price} 
               placeholder="Price..." 
               onChange={e => setPrice(e.target.value)}
        />

        <input className="add-wish-price" 
               type="text" 
               value={link} 
               placeholder="Link..." 
               onChange={e => setLink(e.target.value)}
        />

        <input className="hidden" type="submit"/>

        {/* <input type="submit" /> */}
        {/* <input type="text" title={title} placeholder="я хочю..." onChange={setTitle}/> */}
      </form>
    </div>

  );
}

