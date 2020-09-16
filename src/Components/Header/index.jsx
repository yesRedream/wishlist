import React from 'react';
import { auth } from '../../firebase';
import { useHistory } from "react-router-dom";


export default function Header({match}) {
//    const category = useContext(categoryContext);
 
    const history = useHistory();
    
    function handleClick(){
        auth().signOut().then(function() {
            history.push("/");
            window.location.reload();

          }).catch(function(error) {
            // An error happened.
          });
    }
    
    return (
        <header className="header">
            {/* {category.title} */}
            <div className="profile-wrap">
                <div className="email-img-wrap">
                    <p className="email-text">{auth().currentUser.email}</p>
                    <img className="profile-img" src={auth().currentUser.photoURL} alt="profile"/>
                </div>

                <div className="profile-dropdown">
                    <p onClick={handleClick}>Logout</p>
                </div>
            </div>
        </header>
    );
}