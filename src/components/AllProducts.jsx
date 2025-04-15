import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const AllProducts = ({handleSelectedPr}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("./product.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h1>product: {products.length}</h1>
            <div className='grid grid-cols-4 gap-6 border'>
                {
                    products.map((product) => <ProductCart key={product.recipe_id} product={product} handleSelectedPr={handleSelectedPr} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;