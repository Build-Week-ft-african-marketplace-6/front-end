import './App.css';

import React, { useState, useEffect } from 'react';
import {Route, Switch, } from 'react-router-dom';


import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import NavBar from './components/Header';




const logInStatus = false;



function App() {
  const [loggedIn, setLoggedIn] = useState(logInStatus);

  const logout = () => {
    setLoggedIn(false);
  }
  
  useEffect(()=>{
    if(localStorage.getItem("authorization")){
      setLoggedIn(true)
    };
  }, [loggedIn])
  
  return (
    <div className="App">
      <NavBar loggedIn={loggedIn}/>

      <Switch>
              <Route path="/CreateItem"> <CreateItem /></Route>
              <Route path="/ItemList"> <ItemList/> </Route>
              <Route path="/Logout"> <Logout logout={logout}/> </Route>
              <Route path="/SignUpForm"> <SignUpForm/> </Route>
              <Route path="/Login"> <Login setLoggedIn={setLoggedIn}/> </Route>
              <Route path="/"><Home/></Route>

      </Switch>
      
      
      
      
      </div>
  
  
  
  );
};


export default App