import React, { useState, useEffect } from 'react';

/** Components */
import { useProducts } from '../../context/ProductsContext';

/** Icons */
import { BiTrash } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi';

/** Styles */
import { 
  Container,
  CartTitle,
  ProductsList,
  EmptyCartMessage,
  Product,
  Image,
  DetailsBox,
  ProductTitle,
  DiscountPrice,
  Price,
  TotalBox,
  FreeShippingMessage,
  FinishBox
} from './styles';

export const Cart: React.FC = () => {
  const { products, totalCartPrice, databaseType, removeProductFromList, totalItemsInCart, changeDatabase } = useProducts();
  const [showFreeShippingMessage, setShowFreeShippingMessage] = useState(databaseType === 'abaixo' ? false : true);

  function formatCurrency(value: number) { 
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  useEffect(() => {
    if (totalCartPrice <= 10) {
      setShowFreeShippingMessage(false);
    } else {
      setShowFreeShippingMessage(true);
    };
  }, [totalCartPrice]);

  return (
    <Container>
      <CartTitle>Meu carrinho ({totalItemsInCart})</CartTitle>

      <ProductsList>
          {products.length < 1 ? (
            <EmptyCartMessage>
              <HiOutlineShoppingBag size={40} />
              <span>O seu carrinho de compras está vazio.</span>

              <button onClick={() => changeDatabase(databaseType === 'abaixo' ? 'acima' : 'abaixo')}>Ir às compras</button>
            </EmptyCartMessage>
          ) : (
            <>
              {products.map(product => (
                <Product key={product.productId}>
                  <BiTrash size={20} onClick={() => removeProductFromList(product.productId)} />
                  <Image src={product.image} alt={product.name} />
                  
                  <DetailsBox>
                    <ProductTitle>{product.name}</ProductTitle>
                    <DiscountPrice>{formatCurrency(product.price)}</DiscountPrice>
                    <Price>{formatCurrency(product.priceWithDiscount)}</Price>
                  </DetailsBox>

                </Product>
              ))}
            </>
          )}
        
      </ProductsList>
      <TotalBox>
        <div className="price-box">
          <span>Total</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </div>

        {showFreeShippingMessage && (
          <FreeShippingMessage>
            Parabéns, sua compra tem frete grátis!
          </FreeShippingMessage>
        )}

      </TotalBox>
      <FinishBox>
        <button>Finalizar compra</button>
      </FinishBox>
    </Container>
  );
}