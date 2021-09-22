import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function CreateItem(props){
    const { push } = useHistory()


    const [ item, setItem ] = useState({
        item_name: '',
        item_description: '',
        item_price: '',
        item_country: '',
        item_price: '',
        username: '',
    })
    const handleChange = evt = {
        setItem({
            ...item, 
            [evt.target.name]: evt.target.value
        })
    }
}