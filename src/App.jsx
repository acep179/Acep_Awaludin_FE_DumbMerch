// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Category, Complain, DetailProduct, EditCategory, EditProduct, Home, Login, Product, Profile, Register } from './pages'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>



    // <div className="App">
    //   <Product />
    // </div>
  );
}

export default App;
