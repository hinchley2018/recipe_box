import React, {Component} from 'react';

import '../styles/lists.css';

const OrderedList = ({title, items}) => {
    const itemsToDisplay = items.map((item) =>{
        return <li key={item.id} className="list-group-item ordered-item">{item.content}</li>
    });
    return (
        <div className="">
            <h2>{title}</h2>
            <ol className="list-group" start={1}>
                {itemsToDisplay}
            </ol>
        </div>
    );
};

export default OrderedList;