import React from 'react';

/** Components */
import { Cart } from '../../components/Cart';
import { useProducts } from '../../context/ProductsContext';
import { FaExchangeAlt } from 'react-icons/fa';

/** Styles */
import { Container } from './styles';

const Home: React.FC = () => {
  const { changeDatabase, databaseType } = useProducts();
  
  return (
    <Container>
        <button onClick={() => changeDatabase(databaseType === 'abaixo' ? 'acima' : 'abaixo')}><FaExchangeAlt size={14} /><p>Mudar database</p></button>
        <Cart />
    </Container>
  );
}

export default Home;