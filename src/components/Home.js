import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Image from '../Assets/marketLady.jpg';

const StyledHome = styled.div`
  background-color: #343633;
  width: 100%;
  padding-bottom: 5em;
`

const StyledNav = styled.nav`
  background-color: #5CC8FF;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2em;
`
const StyledH1 = styled.nav`
  font-size: 4em;
  color: #343633;
`
const NavButton = styled.button`
  margin-right: 2em;
  background-color: transparent;
  border: none;
  font-size: 2em;
  text-decoration: none;
  color: #343633;
  &:hover {
    color: #DEC1FF;
  }
`

const StyledImg = styled.img`
  width: 50%;
  margin-top: 10em;
  margin-bottom: 4em;
  border: 10px solid #DEC1FF;
  border-radius: 10px;
`
const StyledPBox = styled.div`
  background-color: #5CC8FF;
  margin: 0 auto;
  width: 50%;
  border-radius: 10px;
`
const StyledP = styled.p`
  width: 50%;
  font-size: 2em;
  color: #343633;
  margin: 0 auto;
  padding: 2em;
`


export default function Home() {

  const history = useHistory();

  const linkSignUp = () => {
    history.push('/signUpPage')
  }
  
    return (
      <StyledHome className="homePage">
        <StyledNav>
            <StyledH1>African Marketplace</StyledH1>
            <div className='nav-links'>
                <NavButton>Login</NavButton>
                <NavButton onClick={linkSignUp}>Sign Up</NavButton>
            </div>
        </StyledNav>
        <StyledImg src={Image}></StyledImg>
        <StyledPBox>
        <StyledP>Sauti African Marketplace empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</StyledP>
        </StyledPBox>
      </StyledHome>
    );
  }