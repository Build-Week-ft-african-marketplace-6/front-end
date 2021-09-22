import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import SignUpPage from './components/signUpPage';
import Home from './components/Home';
import Login from './components/Login';
import CreateItem from './components/ItemCreation';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 1em;
  margin-right: 1em;
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
  margin-bottom: .2em;
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
                <StyledLink to="/signUpPage">Sign Up</StyledLink>
                <StyledLink to="/Login">Login</StyledLink>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/Items">Items</StyledLink>
                <StyledLink to="/CreateItem">Item Creation</StyledLink>
                <StyledLink to="/ItemList">Item List</StyledLink>
                <StyledLink to="/Logout">Logout</StyledLink>
                
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
