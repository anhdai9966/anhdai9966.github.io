import { useContext } from 'react';
import Context from '../../store/context';
import * as action from '../../store/action';

function ProductItem({ product }) {
    const { id, name, image, price, count } = product;
    
    const { dispatch } = useContext(Context);

    const handlePlus = (id) => {
        dispatch(action.plusProduct(id));
    };

    const handleMinus = (id) => {
        dispatch(action.minusProduct(id));
    };

    const handleDelete = (id) => {
        dispatch(action.deleteProduct(id));
    };

    return (
        <div className="product-item d-flex border mb-4">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark fs-5 fw-normal">
                            {name}
                        </h2>
                        <h2 className="text-danger fs-5 fw-normal">
                            {price}
                        </h2>
                    </div>
                    <div className="text-black-50">
                        <div className="d-inline-block me-3">
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleMinus(id)}
                            >
                                -
                            </button>
                            <span className="py-2 px-3 d-inline-block fw-bold">
                                {count}
                            </span>
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handlePlus(id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="text-primary border-0 bg-transparent fw-light"
                        onClick={() => handleDelete(id)}
                    >
                        <span>
                            <i className="fa-solid fa-trash-can"></i>
                        </span>
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
