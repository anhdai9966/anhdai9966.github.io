import ProductItem from './ProductItem';
import Context from '../../store/context';
import { useContext } from 'react';

function ProductList() {
    const { state } = useContext(Context);

    return (
        <div className="product-list">
            {state.length === 0 ? (
                <p className="fst-italic message">
                    Không có sản phẩm trong giỏ hàng
                </p>
            ) : (
                state.map((product, index) => (
                    <ProductItem key={index} product={product} />
                ))
            )}
        </div>
    );
}

export default ProductList;
