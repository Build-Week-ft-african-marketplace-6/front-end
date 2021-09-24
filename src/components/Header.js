
import styled from 'styled-components';

import React from "react";
import { Link } from "react-router-dom";
import CreateItem from "./CreateItem";
import SignUpForm from "./SignUpForm";
import ItemList from "./ItemList";
import Login from "./Login";
import { useHistory } from "react-router";


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




const Header = ( props ) =>{
    const { loggedIn } = props;
    const { push } = useHistory();

    const onClickHeader = (e) => {
    push('/')
    }
    
    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("authorization");
        push('/')}

    return(
        <>
        {!loggedIn &&



                <StyledNav>
                            <div>
                                <StyledH1 onClick={onClickHeader}>Africa's Favorite Marketplace</StyledH1>
                            </div>
      
                  
                        <nav>
                                <StyledAnchor> {localStorage.getItem('authorization') && <Link to='/CreateItem'>Create New Item </Link>} </StyledAnchor>
                                <StyledAnchor> <StyledLink to="/ItemList" component={ItemList}>All Items</StyledLink> </StyledAnchor>
                                <StyledAnchor> <StyledLink to="/SignUpForm" component={SignUpForm}>Sign Up</StyledLink></StyledAnchor>
                                <StyledAnchor> <StyledLink to="/Login" component={Login}>Login</StyledLink></StyledAnchor>
                                <StyledAnchor href='#'onClick={handleLogout}><StyledLink to="/">Logout</StyledLink></StyledAnchor>
                        </nav>
                </StyledNav>
 
        }
        {loggedIn && 
        
        <StyledNav>
                            <div>
                                <StyledH1 onClick={onClickHeader}>Africa's Favorite Marketplace</StyledH1>
                            </div>
      
                  
                        <nav>
                          <StyledAnchor> {localStorage.getItem('authorization') && <Link to='/CreateItem'>Create New Item </Link>} </StyledAnchor>
                          <StyledAnchor> <StyledLink to="/ItemList" component={ItemList}>All Items</StyledLink> </StyledAnchor>
                          <StyledAnchor> <StyledLink to="/CreateItem" component={CreateItem}>Sign Up</StyledLink></StyledAnchor>
                          <StyledAnchor> <StyledLink to="/Login">Login</StyledLink></StyledAnchor>
                          <StyledAnchor ><StyledLink to="/Logout">Logout</StyledLink></StyledAnchor>
                        </nav>
                </StyledNav>
        
        
        
        }

        </>
    )

}
export default Header