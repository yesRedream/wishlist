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


export default function App() {
  const [categories, setCategories] = useState([]);
  const [isAuth, setAuth] = useState();

  

  useEffect(() => {
    api.getCategories().then(setCategories);
    
    auth().onAuthStateChanged(function(user) {
      if (user) {
        setAuth('signed');
      } else {
        setAuth('no');
      }
    });
    
  }, []);


  if (isAuth === 'signed') {
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
  }

  if (isAuth === 'no') {
    return (
      <DBContext.Provider value={{...api}}>
        <Route component={Login}/>
      </DBContext.Provider>
    );
  }

  return (
    <div className="spinner-wrap">
      <div className="loadingio-spinner-rolling-pmiwm2ufmu">
        <div className="ldio-x68g8gm35i">
          <div></div>
        </div>
      </div>
    </div>
  );
}