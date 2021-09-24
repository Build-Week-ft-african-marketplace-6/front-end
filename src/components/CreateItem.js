import React, { useState } from 'react'
import axiosWithAuth from '../components/axiosWithAuth';

const initialFormValues = {
    item_name: '',
    item_description: '',
    item_country: '',
    item_price: '',
    username: '',
}

export default function CreateItem(){
    


    const [ formValues, setFormValues ] = useState(initialFormValues)
 
    const handleChange = e => {
        const {name, value } = e.target
            setFormValues({ ...formValues, [name]: value })
          };
    

    const handleSubmit = e => {
        e.preventdefault();
        
        const newItem = {
            item_country: formValues.item_country,
            item_name: formValues.item_name,
            username: formValues.username,
            item_price: formValues.item_price,
            item_description: formValues.item_description,
        };
        //console log newItem to see it move

        axiosWithAuth()
        .post('/items/', newItem)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)});
      setFormValues(initialFormValues);
    };

    //     axios.post(`https://web-45-heroku-tb.herokuapp.com/api/items`, newItem)
    //     .then(res => {
    //         props.newItem(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Fill in this form to <br></br>add your item to the marketplace.</h3>
                <div>
                    <input
                    value={formValues.item_name}
                    onChange={handleChange}
                    name="item_name"
                    type="text"
                    placeholder="What is your item?"
                    />
                </div>
                <div>
                    <input
                    value={formValues.item_description}
                    onChange={handleChange}
                    name="item_description"
                    type="text"
                    placeholder="Give a description of your item(s) and how to contact you."
                    />
                </div>
                <div>
                    <input
                    value={formValues.item_price}
                    onChange={handleChange}
                    name="item_price"
                    type="text"
                    placeholder="Price per individual unit."
                    />
                </div>
                <div>
                    <input
                    value={formValues.username}
                    onChange={handleChange}
                    name="username"
                    type="text"
                    placeholder="Your username or seller name"
                    />
                </div>
                <div>
                    <select
                    value={formValues.item_country}
                    onChange={handleChange}
                    name="item_country"
                    type="tex"
                    placeholder="Seller's Region">
                    <option value="">Selcet Seller's Region</option>
                    <option value="1">South Africa</option>
                    <option value="2">Middle Africa</option>
                    <option value="3">East Africa</option>
                    <option value="4">West Africa</option>
                    <option value="5">North Africa</option>
                    </select>
                </div>
                <button>Add your item</button>
            </form>
        </div>
    );

    

}