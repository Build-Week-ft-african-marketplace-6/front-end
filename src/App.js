import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import SignUpPage from './components/signUpPage';
import Home from './components/Home';
import Login from './components/Login';
import CreateItem from './components/ItemCreation';
import styled from 'styled-components';


const StyledNav = styled.nav`
  background-color: #5CC8FF;
  padding: 2em;
`
const StyledH1 = styled.nav`
  font-size: 4em;
  color: #343633;
`
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

function App() {

  return (
    <div className="App">
      <StyledNav>
            <StyledH1>African Marketplace</StyledH1>
            <div className='nav-links'>
              <nav>
                <Link to="/signUpPage">Sign Up</Link>
                <Link to="/Login">Login</Link>
                <Link to="/">Home</Link>
                <Link to="/Items">Items</Link>
                <Link to="/CreateItem">Item Creation</Link>
                <Link to="/ItemList">Item List</Link>
                <Link to="/Logout">Logout</Link>
                
              </nav>
            </div>
        </StyledNav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signUpPage">
        <SignUpPage/>
      </Route>
      <Route exact path="/Login">
        <Login/>
      </Route>
      <Route exact path="/CreateItem">
        <CreateItem />
      </Route>
      
    </div>
  );
}

export default App;
