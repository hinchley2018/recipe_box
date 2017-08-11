import React from 'react';

const ItemList = ({title, items}) => {
    const itemsToDisplay = items.map((item) =>{
        return <li key={item.id} className="list-group-item">{item.content}</li>
    });
    return (
        <div >
            <h2>{title}</h2>
            <ul className="list-group">
                {itemsToDisplay}
            </ul>
        </div>
    );
}

export default ItemList;