import React from 'react';

/** Components */
import Home from './pages/Home';
import { ProductsProvider } from './context/ProductsContext';

/** Styles */
import GlobalStyles from './styles/global';

function App() {
  return (
    <ProductsProvider>
      <GlobalStyles />

      <Home />
      
    </ProductsProvider>
  );
}

export default App;
