import React, { useState, useEffect} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

const StyledBack = styled.div`
    background-color: #343633;
    padding-top: 2em;
    padding-bottom: 25.9em;
`

const StyledItemList = styled.div`
  background-color: #343633;
  width: 100%;
  padding-bottom: 5em;
`

const InputBackground = styled.header`
    background-color: #7D70BA;
    width: 50%;
    margin: 0 auto;
    padding: 2em;
    border: 10px solid #DEC1FF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5em;
`
const StyledP = styled.p`
  width: 50%;
  font-size: 2em;
  color: #343633;
  margin: 0 auto;
  padding: 2em;
`
const StyledButton = styled.button`
  margin-right: 2em;
  margin-left: 2em;
  background-color: transparent;
  border: none;
  font-size: 2em;
  text-decoration: none;
  color: #DEC1FF;
  &:hover {
    color: #5CC8FF;
  }
`




const ItemList = () => {
   const [ items, setItems ] = useState([])
   const { push } = useHistory();
   
   
   useEffect(() => {
    const getItems = () => {
     axios.get('https://web-45-heroku-tb.herokuapp.com/api/items')
        .then(res => {
            setItems(res.data)
            console.log(res.data)
                     }
            )
            .catch(err => {
                console.log(err)
            })
    }
    getItems()
     },[])
    
     
    

     const handleClick = (e, item) => {
         e.preventDefault()
         push(`/item-list/${item.id}`)
     }




     return(
        <StyledBack>
        <InputBackground>
             <h1>Here are items that can be found in the Market</h1>
             <p> Click here if you have items for sale</p>
             <Link to ="/protected"><StyledButton>Add your item</StyledButton></Link>
         </InputBackground>

         <div>
             {items.map(item=> (
                 <div onClick={e=> handleClick(e, item)} key={item.id}>
                     <h3>{item.item_name}</h3>
                     <p>Description: {item.item_description}</p>
                     <p>Price: ${item.item_price}</p>
                     <p>Country: {item.item_country}</p>
                     <p>Seller: {item.username}</p>
                </div>
             ))}
         </div>
         </StyledBack>
     )
}
export default ItemList