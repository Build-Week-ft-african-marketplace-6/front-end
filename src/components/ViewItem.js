import React from 'react';
import { Link } from 'react-router-dom';


const ViewItem = (props) => {
    const {id, name, seller, description, location, price,} = props.ViewItem

    return(
        <tr key={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{seller}</td>
            <td>{price}</td>
            <td> 
                <Link to={`/item-list/${id}`} className="view"><input type="button" value="view"/></Link>
            </td>

        </tr>
    )
}
export default ViewItem