import React, { useState, useEffect, useRef } from 'react';
// import DBContext from '../../context/db';
import { app } from '../../firebase';


export default function WishCreate({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  // const db = useContext(DBContext);
  const [toggleClass, setToggleClass] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [imgUrlPlace, setImgUrlPlace] = useState('');
  const [picture, setPicture] = useState('');
  const [active, setActive] = useState(false);
 

  function handleClick() {
    setToggleClass(true);
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

  async function onFileChange (event) {

    if (event.target.value) {
      setActive(true);
      setPicture(URL.createObjectURL(event.target.files[0]) );
      setImgUrlPlace(event.target.value);
      const file = event.target.files[0];
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      setImgUrl(await fileRef.getDownloadURL());
    }
  }

  function handleDeleteImg() {
    setActive(false);
    setImgUrlPlace('');
    setImgUrl(null);
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }
  


  function handleSubmit(event) {
    event.preventDefault();
    console.log(price);
    if (title) {
      onSubmit(title, price, link, imgUrl);
      setTitle('');
      setPrice('');
      setLink('');
      setImgUrl(null);
      setImgUrlPlace('');
      setToggleClass(false);
      setActive(false);

    }
  }

  return (
    <div className="add-wish-wrap">
      <form ref={wrapperRef} onSubmit={handleSubmit}  onClick={handleClick} className={`add-wish-form ${toggleClass ? 'active' :''}`}>
        <div className="form-wrap">
          <div className="img-add-wrap">
            <input type="file" 
                  accept="image/x-png,image/gif,image/jpeg"
                  onChange={onFileChange}
                  value={imgUrlPlace}
                  id="imageInput"/>
            <label htmlFor="imageInput" 
                   className={`img-button ${active ? 'active' :''}`}
                   >Choose image</label>
            <div className={`img-preview ${active ? 'active' :''}`} >
              <img className="playerProfilePic_home_tile" alt="wish" src={picture && picture}></img>
              <div className="delete" onClick={handleDeleteImg}>{'\u2715'}</div>
            </div>
          </div>
  
          <input className="add-wish-input" 
                type="text" 
                value={title} 
                placeholder="I want..." 
                required
                onChange={e => setTitle(e.target.value)}
                onKeyDown={handleEnter} 
          />

          <input className="add-wish-price" 
                type="number" 
                step="0.01"
                min="0"
                value={price} 
                placeholder="Price..." 
                onChange={e => setPrice(e.target.value)}
                onKeyDown={handleEnter} 
          />

          <input className="add-wish-price" 
                type="text" 
                value={link} 
                placeholder="Link..." 
                onChange={e => setLink(e.target.value)}
                onKeyDown={handleEnter} 
          />

          
          <input className="submit" type="submit" value="Done"/>
        </div>

        {/* <input type="submit" /> */}
        {/* <input type="text" title={title} placeholder="я хочю..." onChange={setTitle}/> */}
      </form>
    </div>

  );
}

