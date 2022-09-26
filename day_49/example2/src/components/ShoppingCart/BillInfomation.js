import Context from '../../store/context';
import { useContext } from 'react';

function BillInfomation() {
    const { state } = useContext(Context);

    const subTotal = state.reduce((a, b) => a + b.price * b.count, 0);

    const vat = subTotal * 0.1;

    const total = subTotal + vat;

    return (
        <div className="bill">
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Tạm tính:</span>
                <span className="text-primary" id="sub-total-money">
                    {subTotal} VND
                </span>
            </div>
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">VAT (10%):</span>
                <span className="text-primary" id="vat-money">
                    {vat} VND
                </span>
            </div>
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Thành tiền:</span>
                <span className="text-primary" id="total-money">
                    {total} VND
                </span>
            </div>
        </div>
    );
}

export default BillInfomation;
