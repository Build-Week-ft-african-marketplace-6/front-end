import React, { useState, useEffect} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";




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
        <>
        <header>
             <h1>Here are items that can be found in the Market</h1>
             <p> Click here if you have items for sale</p>
             <Link to ="/protected"><button>Add your item</button></Link>
         </header>

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
         </>
     )
}
export default ItemList