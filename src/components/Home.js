import React from 'react';
import styled from 'styled-components';
import Image from '../Assets/marketLady.jpg';

const StyledHome = styled.div`
  background-color: #343633;
  width: 100%;
  padding-bottom: 5em;
`

const StyledImg = styled.img`
  width: 50%;
  margin-top: 7em;
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

  // const history = useHistory();

  // const linkSignUp = () => {
  //   history.push('/signUpPage')
  // }

  // const linkLogin = () => {
  //   history.push('/Login')
  // }
  
    return (
      <StyledHome className="homePage">
        <StyledImg src={Image}></StyledImg>
        <StyledPBox>
          <StyledP>Sauti African Marketplace empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</StyledP>
        </StyledPBox>
        <div>
          {/* <NavButton onClick={linkSignUp}>Sign Up!</NavButton>
          <NavButton onClick={linkLogin}>Login!</NavButton> */}
        </div>
      </StyledHome>
      
    );
  }