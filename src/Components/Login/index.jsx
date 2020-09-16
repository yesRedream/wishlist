import React, {useContext} from 'react';
import DBContext from '../../context/db';
import { useHistory } from "react-router-dom";

export default function Login() {
    const db = useContext(DBContext);
    const history = useHistory();
    
    function handleClick(){
        db.signInWithGoogle();
        history.push("/");
    }
  
    return (
      <div className="login-wrap">
        <div onClick={handleClick} className="google-btn">
          <div className="google-icon-wrapper">
            <img className="google-icon" alt="Google logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <p className="btn-text"><b>Sign in with Google</b></p>
        </div>
      </div>
    );
  }
  
  