import './App.css';
import styled from 'styled-components';

import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { useHistory } from 'react-router'


import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
<<<<<<< HEAD
import PrivateRoute from './components/PrivateRoute';
=======
// import PrivateRoute from './components/PrivateRoute';
import Items from './components/items';
>>>>>>> main

const StyledLink = styled(Link)`
  text-decoration: none;
  text-decoration: none;
  color: #343633;
  &:hover {
    color: #DEC1FF;
  }
`
const StyledAnchor = styled.a`
  font-size: 1.5em;
  margin-left: 1em;
  margin-right: 1em;
  text-decoration: none;
  color: #343633;
  &:hover {
    color: #DEC1FF;
  }
`

const StyledNav = styled.nav`
  background-color: #5CC8FF;
  padding: 2em;
`
const StyledH1 = styled.nav`
  font-size: 4em;
  color: #343633;
`
// const NavButton = styled.button`
  // margin-right: 2em;
  // background-color: transparent;
  // border: none;
  // font-size: 2em;
  // text-decoration: none;
  // color: #343633;
  // &:hover {
  //   color: #DEC1FF;
  // }
// `

export default function App() {
  // const [items, setItems] = useState([])
  const { push } = useHistory();

        const onClickHeader = (e) => {
        push('/')
        }

          const handleLogout = e => {
            e.preventDefault();
            localStorage.removeItem("token");
            push('/')
          }




  return (
    <div className="App">
      

      <StyledNav>
                            <div>
                                <StyledH1 onClick={onClickHeader}>Africa's Favorite Marketplace</StyledH1>
                            </div>
      
                  
                        <div>
<<<<<<< HEAD
                          <a> {localStorage.getItem('token') && <Link to='/protected'>Create New Item </Link>} </a>
                          <a> <Link to="/item-list" component={ItemList}>All Items</Link> </a>
                          <a> <Link to="/SignUpForm"></Link>Sign Up</a>
                          <a> <Link to="/Login"></Link>Login</a>
                          <a href='#'onClick={handleLogout}>Logout</a>
=======
                          <StyledAnchor> {localStorage.getItem('token') && <Link to='/protected'>Create New Item </Link>} </StyledAnchor>
                          {/* <StyledAnchor> <StyledLink to="/ItemList" component={ItemList}>All Items</StyledLink> </StyledAnchor> */}
                          <StyledAnchor> <StyledLink to="/SignUpForm">Sign Up</StyledLink></StyledAnchor>
                          <StyledAnchor> <StyledLink to="/Login">Login</StyledLink></StyledAnchor>
                          <StyledAnchor href='#'onClick={handleLogout}><StyledLink to="/">Logout</StyledLink></StyledAnchor>
>>>>>>> main
                        </div>
                </StyledNav>
      
      <Switch>
<<<<<<< HEAD
        <PrivateRoute exact path="/protected" component={CreateItem} />
              <Route path="/item-list" render={() => <ItemList/>}/>
        <PrivateRoute path="/Logout" component={Logout}/>
=======
        {/* <PrivateRoute path="/" component={CreateItem} /> */}
              <Route path="/ItemList" render={() => <ItemList/>}/>
        {/* <PrivateRoute path="/Logout" component={Logout}/> */}
>>>>>>> main
              <Route path="/SignUpForm" component={SignUpForm}/>
              <Route path="/Login" component={Login}/>
              <Route path="/"><Home/></Route>

      </Switch>
      
      
      
      
      </div>
  
  
  
  );
}


