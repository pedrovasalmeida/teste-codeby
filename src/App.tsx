import React from 'react';

/** Components */
import Home from './pages/Home';
import { ProductsProvider } from './context/ProductsContext';
import { ToastContainer } from 'react-toastify';

/** Styles */
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ProductsProvider>
      <ToastContainer />
      <GlobalStyles />

      <Home />
      
    </ProductsProvider>
  );
}

export default App;
