import React from 'react';
import DetailsPr from './DetailsPr';

const AddToCart = ({selected, onDelete}) => {

    console.log(selected)
    return (
        <div>
            {
             selected.map((p) => <DetailsPr product={p} onDelete={onDelete}/>)   
            }
        </div>
    );
};

export default AddToCart;