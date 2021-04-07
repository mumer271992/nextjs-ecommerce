import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../components/CartProvider';

const useCart = () => {
  const { items, showDrawer, addItemToCart, clearCart, openDrawer, hideDrawer } = useContext(CartContext);
  return {
    items, showDrawer, addItemToCart, clearCart, openDrawer, hideDrawer
  };
};

export default useCart;