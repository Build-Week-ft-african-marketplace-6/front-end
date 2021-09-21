import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';


const Item = (props) => {
    const [ item, setItem ] = useState({})
    const { id } = props.match.params

    useEffect(() => {
        axios.get(`'HEROKU ENDPOINT w/${id}`)
        .then(res => {
            setItem(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

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

export default Item