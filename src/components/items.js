import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';


const Items = (props) => {
    const [ item, setItem ] = useState({})
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios.get(`https://web-45-heroku-tb.herokuapp.com/api/items/${id}`)
        .then(res => {
            setItem(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [props.history.id] 
    )

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

export default Items;