import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import Header from '../components/Header';
import { CartContext } from '../components/CartProvider';

const renderHeaderWithMockedContext = () => {
  const addItemToCart = () => {};
  const clearCart = () => {};
  const openDrawer = () => {};
  const hideDrawer = () => {};
  const jsx = (
    <CartContext.Provider value={{ items: [], showDrawer: false, addItemToCart, clearCart, openDrawer, hideDrawer } }>
      <Header />
    </CartContext.Provider>
  );
  return render(jsx);
}

test('Render header without crash', () => {
  const { queryByTestId } = renderHeaderWithMockedContext();
  expect(queryByTestId('header-container')).toBeInTheDocument();
});

test('Render cart icon in header', () => {
  const { queryByTestId } = renderHeaderWithMockedContext();
  expect(queryByTestId('cart-icon')).toBeInTheDocument();
});