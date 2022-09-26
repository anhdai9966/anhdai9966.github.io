import BillInfomation from './BillInfomation'
import ProductList from './ProductList'
import './style.css'

function ShoppingCart() {
    
    return (
        <div className="shopping-cart-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <h2>Shopping Cart</h2>
                        </div>
                    </div>
                </div>

                
                <div className="row shopping-cart">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <BillInfomation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart