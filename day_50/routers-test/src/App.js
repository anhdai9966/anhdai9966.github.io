import { Route, Routes } from 'react-router-dom';
import Customers from './components/Customers';
import Dashboard from './components/Dashboard';
import Desktop from './components/Desktop';
import Laptop from './components/Laptop';
import Login from './components/Login';
import NotFount from './components/NotFound';
import OrderDetail from './components/OrderDetail';
import Orders from './components/Orders';
import PrivateRoutes from './components/private/PrivateRoutes';
import User from './components/private/User';
import Products from './components/Products';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 bg-dark min-height-100vh">
                    <Sidebar />
                </div>
                <main className="col-md-10 p-5">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/products" element={<Products />} >
                            <Route path='desktop' element={<Desktop/>} />
                            <Route path='laptop' element={<Laptop/>} />
                        </Route>
                        <Route path="/orders">
                            <Route index element={<Orders />} />
                            <Route path=":orderId" element={<OrderDetail />} />
                        </Route>

                        <Route element={<PrivateRoutes/>}>
                            <Route path='/users' element={<User />}/>
                        </Route>

                        <Route path='/login' element={<Login />} />
                        <Route path="/*" element={<NotFount />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;
