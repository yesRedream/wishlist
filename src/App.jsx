import React, { useState,  useEffect } from 'react';
import * as api from './api';

import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Itemslist from './Components/Itemslist';
import Content from './Components/Content';

 import DBContext from './context/db';


function App() {
  const [categories, setCategories] = useState([]);

  // const [wishes, setWishes] = useState([]);

  useEffect(() => {
    api.getCategories().then(setCategories);
    // get('wishes').then(setWishes);
  }, []);


  return (
    <DBContext.Provider value={{categories, ...api}}>
      <div className="app">
        <Header/>
        <div className="main">
          <Sidebar categories={categories}/>
          <Content>
            <Switch>
              {/* <Route exact path="/" component={Itemslist} /> */}
              <Route exact path="/" component={Itemslist} />
              <Route path="/:categoryId?" component={Itemslist} />
          </Switch>
          </Content>
        </div>
      </div>
    </DBContext.Provider>
  );
}

export default App;
