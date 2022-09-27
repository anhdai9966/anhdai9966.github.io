import React, { useContext } from 'react';
import Context from '../../context/Context';
import { formatMoney } from '../../utils/utils';
import * as action from '../../store/actions';

function ProductItem({ product }) {
    const { state, dispatch } = useContext(Context);

    const { id, name, price, count, size } = product;

    const handleSubtractCount = (id) => {
        const product = state.find((product) => product.id === id);
        if (product.count <= 1) return;

        dispatch(action.subtractCount(id));
    };

    const handleAddCount = (id) => {
        dispatch(action.addCount(id));
    };

    const handleDeleteCount = (id) => {
        const isConfirm = window.confirm('Bạn có muốn xóa không?');
        if (isConfirm) {
            dispatch(action.deleteProduct(id));
        }
    };

    return (
        <div className="product-item d-flex border mb-4">
            <div className="image">
                <img
                    src="https://media.techmaster.vn/api/static/36/bu7v9ks51co41h2qcttg"
                    alt=""
                />
            </div>
            <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="text-dark fs-5 fw-normal">
                            {name} ({size})
                        </h2>
                        <h2 className="text-danger fs-5 fw-normal">
                            {formatMoney(price)} VND
                        </h2>
                    </div>
                    <div className="text-black-50">
                        <div className="d-inline-block me-3">
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleSubtractCount(id)}
                            >
                                -
                            </button>
                            <span className="py-2 px-3 d-inline-block fw-bold">
                                {count}
                            </span>
                            <button
                                className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                onClick={() => handleAddCount(id)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="text-primary border-0 bg-transparent fw-light"
                        onClick={() => handleDeleteCount(id)}
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
