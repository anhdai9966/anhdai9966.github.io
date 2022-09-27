import React, { useContext } from 'react';
import Context from '../../context/Context';
import ProductItem from '../ProductItem';

function ProductList() {
    const { state } = useContext(Context);

    return (
        <div className="col-md-8">
            <div className="product-list">
            {state.length === 0 && <h1>Không có sản phẩm nào</h1>}
                {state.length > 0 && state.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
