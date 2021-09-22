import React from 'react';
import { Link } from 'react-router-dom';


const ViewItem = (props) => {
    const {name, seller, description, location, price, id} = props.ViewItem

    return(
        <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td> 
                <Link to={`/Item-List/${id}`}><input type="buton" value="view"/></Link></td>

        </tr>
    )
}
export default ViewItem