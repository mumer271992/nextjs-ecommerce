import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import ShoppingCart from '../components/ShoppingCart';
import { CartContext } from '../components/CartProvider';

const renderCartWithMockedContext = () => {
  const addItemToCart = () => {};
  const clearCart = () => {};
  const openDrawer = () => {};
  const hideDrawer = () => {};
  const jsx = (
    <CartContext.Provider value={{ items: [], showDrawer: false, addItemToCart, clearCart, openDrawer, hideDrawer } }>
      <ShoppingCart />
    </CartContext.Provider>
  );
  return render(jsx);
}

test('Render shopping cart without crash', () => {
  const { queryByTestId } = renderCartWithMockedContext();
  expect(queryByTestId('shopping-cart')).toBeInTheDocument();
});
