import React, { useContext } from 'react';
import Context from '../../context/Context';
import { formatMoney } from '../../utils/utils';

function BillInformation() {
    const { state } = useContext(Context);

    const price = state.reduce((a, b) => a + b.price * b.count, 0);

    const vat = price * 0.1;

    const total = price + vat;

    return (
        <>
            <div className="col-md-4">
                <div className="bill">
                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                        <span className="text-black-50">Tạm tính:</span>
                        <span className="text-primary" id="sub-total-money">
                            {formatMoney(price)}
                        </span>
                    </div>
                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center discount-box">
                        <span className="text-black-50">VAT (10%):</span>
                        <span className="text-primary" id="discount-money">
                            {formatMoney(vat)}
                        </span>
                    </div>
                    <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                        <span className="text-black-50">Thành tiền:</span>
                        <span className="text-primary" id="total-money">
                            {formatMoney(total)}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BillInformation;
