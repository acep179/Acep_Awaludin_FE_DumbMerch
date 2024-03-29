// import logo from './logo.svg';
// import './App.css';
import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { UserContext } from './context/userContext';
import { Category, AddCategory, ComplainAdmin, ComplainCustomer, AddProduct, DetailProduct, EditCategory, EditProduct, Home, Login, Product, Profile, Register } from './pages'

import { API, setAuthToken } from './config/api';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (state.isLogin === false) {
      navigate("/login" || "/register");
    } else {
      if (state.user.status === 'admin') {
        navigate('/product');
      } else if (state.user.status === 'customer') {
        navigate('/');
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/complain" element={state.user.status === "admin" ? <ComplainAdmin /> : <ComplainCustomer />} />

      <Route path="/category" element={<Category />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/edit-category/:id" element={<EditCategory />} />

      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/detail-product/:id" element={<DetailProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/product" element={<Product />} />
    </Routes>

  );
}

export default App;
