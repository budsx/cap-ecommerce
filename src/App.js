import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="login" element={<Layout children={<Login />} />} />
        <Route path="register" element={<Layout children={<Register />} />} />
        <Route path="products" element={<Layout children={<Products />} />} />
        <Route path="cart" element={<Layout children={<Cart />} />} />
        <Route
          path="detail"
          element={<Layout children={<ProductDetail />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
