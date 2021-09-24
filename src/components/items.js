import React from 'react';



export default function Items (props){
    const { item } = props
return(
    <div>
        <h2>{item.item_name}</h2>
        <p>{item.item_description}</p>
        <p>{item.item_price}</p>
        <p>{item.item_seller}</p>
        <p>{item.item_country}</p>
    </div>
)
}

