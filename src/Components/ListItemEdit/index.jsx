import React, { useState } from 'react';

export default function ListItemEdit({wish, onUpdate}) {
  // const [title, setTitle] = useState(wish && wish.title);
  const [title, setTitle] = useState( wish.title);
  const [price, setPrice] = useState( wish.price);
  const [link, setLink] = useState( wish.link);
  // const db = useContext(DBContext);
  console.log(title);

  function handleSubmit(event) {
    event.preventDefault();

    onUpdate(wish.id, title, price, link);

    console.log(wish.id, title);

    // setTitle(wish && wish.title);
  }


    return (
      <div className="edit-wish-item">
        {/* <div>{wish.title}</div> */}
        <form onSubmit={handleSubmit} className="edit-wish-form">
          {/* <input defaultValue={wish && wish.title} value={title}></input> */}
          {wish.imgUrl &&
            <div className={"img-preview"} >
              <img className="wish-img" src={wish.imgUrl} alt="wish"/>
              {/* <div className="delete" 
                  // onClick={handleDeleteImg}
                  >{'\u2715'}
              </div> */}
            </div>
          }

          {/* {!wish.imgUrl &&
            <div className="img-add-wrap">
              <input type="file" 
                    accept="image/x-png,image/gif,image/jpeg"
                    onChange={onFileChange}
                    value={imgUrlPlace}
                    id="imageInput"/>
              <label htmlFor="imageInput" 
                    className={`img-button ${active ? 'active' :''}`}
                    >Choose image</label>
            </div>
          } */}

          {!wish.imgUrl &&
            <div className="img-add-wrap">

            </div>
          }


          <input className="edit-wish-input edit-name" 
                 required
                 value={title} 
                 onChange={e => setTitle(e.target.value)}
                //  ref={input => input && input.focus()}
          />

          <input className="edit-wish-input edit-price" 
                 value={price} 
                 placeholder="price..."
                 onChange={e => setPrice(e.target.value)}
                //  ref={input => input && input.focus()}
          />

          <input className="edit-wish-input edit-link" 
                 value={link} 
                 placeholder="link..."
                 onChange={e => setLink(e.target.value)}
                //  ref={input => input && input.focus()}
          />

          <input className="submit" type="submit" name=""  value="Done" id=""/>
        </form>
        {/* <input value={wish && wish.title}></input> */}
      </div>
       
          
    );
  }
  
  