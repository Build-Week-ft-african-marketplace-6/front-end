import './App.css';
// import styled from 'styled-components';

import React, {  } from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';
import { useHistory } from 'react-router'


import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import PrivateRoute from './components/PrivateRoute';






// const StyledNav = styled.nav`
//   background-color: #5CC8FF;
//   padding: 2em;
// `
// const StyledH1 = styled.nav`
//   font-size: 4em;
//   color: #343633;
// `
// const NavButton = styled.button`
//   margin-right: 2em;
//   background-color: transparent;
//   border: none;
//   font-size: 2em;
//   text-decoration: none;
//   color: #343633;
//   &:hover {
//     color: #DEC1FF;
//   }
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
    <Router>
    <div className="App">
      

      
                            <div>
                                <h1 onClick={onClickHeader}>Africa's Favorite Marketplace</h1>
                            </div>
      
                  <nav>
                        <div>
                          <a> {localStorage.getItem('token') && <Link to='/protected'>Create New Item </Link>} </a>
                          <a> <Link to="/ItemList" component={ItemList}>All Items</Link> </a>
                          <a> <Link to="/SignUpForm"></Link>Sign Up</a>
                          <a> <Link to="/Login"></Link>Login</a>
                          <a href='#'onClick={handleLogout}>Logout</a>
                        </div>
                </nav>
      
      <Switch>
        <PrivateRoute path="/" component={CreateItem} />
              <Route path="/ItemList" render={() => <ItemList/>}/>
        <PrivateRoute path="/Logout" component={Logout}/>
              <Route path="/SignUpForm" component={SignUpForm}/>
              <Route path="/Login" component={Login}/>
              <Route exact path="/"><Home/></Route>

      </Switch>
      
      
      
      
      </div>
  
  
      </Router>
  );
}


