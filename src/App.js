import React from 'react';
import { AuthProvider } from './components/AuthProvider';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import ThemeProvider from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import { LanguageProvider } from './components/LanguageContext';
import { Language } from './components/Language';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



const App = () => (
  <ThemeProvider>
    <div className="app-container">
      <ThemeToggle />
    <AuthProvider>
      <h1>Simple Authentication System</h1>
      <Login />
      <UserProfile />
    </AuthProvider>

    <br /> <br />

    <LanguageProvider>
      <Language />
    </LanguageProvider>
    <br /> <br />

    <CartProvider>
      <div>
        <h1>Simple Shopping Cart</h1>
        <ProductList />
        <br />
        <Cart />
        <br />
        <Checkout />
      </div>
    </CartProvider>
    </div>
  </ThemeProvider>

);
export default App;