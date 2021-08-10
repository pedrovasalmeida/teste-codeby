import React, { createContext, useContext, useState, useEffect } from 'react';

/** Data */
import DatabaseAbaixo10 from '../database/abaixo-10.json';
import DatabaseAcima10 from '../database/acima-10.json';

/** Types */
import { IProduct } from '../types/Products/IProduct';

type DatabaseType = 'abaixo' | 'acima';

interface CartContextProps {
  products: IProduct[];
  totalCartPrice: number;
  totalItemsInCart: number;
  databaseType: DatabaseType;
  changeDatabase: (option: DatabaseType) => void;
  removeProductFromList: (productId: string) => void;
}

const CartContext = createContext({} as CartContextProps);

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [databaseType, setDatabaseType] = useState<DatabaseType>('abaixo');

  function getProductDataFromJSONDatabase(type: 'abaixo' | 'acima') {
    switch(type) {
      case 'abaixo':
        const productListBelow10 = DatabaseAbaixo10.items.map(item => {
          return {
            id: item.uniqueId,
            productId: item.productId,
            name: item.name,
            image: item.imageUrl,
            priceWithDiscount: (item.price + item.priceTags[0].value) / 100,
            price: item.price / 100,
          }
        });

        return setProducts([...productListBelow10]);

      case 'acima':
        const productListAbove10 = DatabaseAcima10.items.map(item => {
          return {
            id: item.uniqueId,
            productId: item.productId,
            name: item.name,
            image: item.imageUrl,
            priceWithDiscount: (item.price + item.priceTags[0].value) / 100,
            price: item.price / 100,
          }
        });

        return setProducts([...productListAbove10]);

      default: break;
    }
    
    const productList = DatabaseAbaixo10.items.map(item => {
      return {
        id: item.uniqueId,
        productId: item.productId,
        name: item.name,
        image: item.imageUrl,
        priceWithDiscount: (item.price + item.priceTags[0].value) / 100,
        price: item.price / 100,
      }
    });

    setProducts([...productList]);
  }

  function handleWithChooseDatabase(option: DatabaseType) {
    return setDatabaseType(option);
  }

  function removeProductFromList(productId: string) {
    if (window.confirm('Tem certeza que deseja remover o produto do carrinho?')) {
      const filteredProducts = products.filter(product => product.productId !== productId);
    
      setProducts([...filteredProducts]);
    }
  }

  useEffect(() => {
    getProductDataFromJSONDatabase(databaseType);
  }, [databaseType]);

  useEffect(() => {
    function getTotalCartPrice() {
      let total = 0;

      products.forEach(product => {
        total += product.priceWithDiscount;
      })

      setTotalCartPrice(total);
    }

    getTotalCartPrice();
  }, [products]);

  useEffect(() => {
    setTotalItemsInCart(products.length)
  }, [products]);
  
  return (
    <CartContext.Provider value={{ 
      products, 
      totalCartPrice, 
      changeDatabase: handleWithChooseDatabase, 
      databaseType, 
      removeProductFromList, 
      totalItemsInCart,
    }}>{children}</CartContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(CartContext);

  return context;
}