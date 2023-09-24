import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { CartProvider } from './CartContext'; // Import the CartProvider
import AppRoutes from './Routes'; // Import the AppRoutes component

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
