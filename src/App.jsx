import React, { useState,  useEffect } from 'react';
import * as api from './api';

import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Itemslist from './Components/Itemslist';
import Content from './Components/Content';
import Login from './Components/Login';
import { auth } from './firebase';

import DBContext from './context/db';


function App() {
  const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [wishes, setWishes] = useState([]);
  let isAuth = auth().currentUser;

  useEffect(() => {
    api.getCategories().then(setCategories);
    // setTimeout(() => setLoading(false), 6000);
    // get('wishes').then(setWishes);
  }, []);
  
  auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });

  if (isAuth) {
    console.log('mine');
    return (
      <DBContext.Provider value={{categories, ...api}}>
        <div className="app">
          <Header/>
          <div className="main">
            <Sidebar categories={categories}/>
            <Content>
              <Switch>
                <Route exact path="/" component={Itemslist} />
                <Route path="/:categoryId?" component={Itemslist} />
            </Switch>
            </Content>
          </div>
        </div>
      </DBContext.Provider>
    );
  } else { 
    return (
      <DBContext.Provider value={{...api}}>
        <Route component={Login}/>
      </DBContext.Provider>

    );
  }
}

export default App;
