import { useParams } from 'react-router-dom';

function OrderDetail() {
    let { orderId } = useParams();
    
    return (
        <>
            <h1>OrderDetail {orderId}</h1>
            <p>{orderId} Sao không hiện</p>
        </>
    );
}

export default OrderDetail;
