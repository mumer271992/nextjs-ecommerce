import '@testing-library/jest-dom'
import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import IndexPage from '../pages/index';;
import { CartContext } from '../components/CartProvider';
import products from '../mockData/products.json';
import categories from '../mockData/categories.json';

const renderPage = () => {
  const mockedProps = {
    categories: [],
    productsData: {},
    featuredProduct: {}
  }
  const addItemToCart = () => {};
  const clearCart = () => {};
  const openDrawer = () => {};
  const hideDrawer = () => {};
  const jsx = (
    <CartContext.Provider value={{ items: [], showDrawer: false, addItemToCart, clearCart, openDrawer, hideDrawer } }>
      <IndexPage {...mockedProps} />
    </CartContext.Provider>
  );
  return render(jsx);
}

test('Render home page without crash', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('header-container')).toBeInTheDocument();
});

test('Render featured product', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('featured-product')).toBeInTheDocument();
});

test('Render filters', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('filters')).toBeInTheDocument();
});

test('Render breadcrumb', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('breadcrumb-section')).toBeInTheDocument();
});

test('Render sorting', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('sorting-section')).toBeInTheDocument();
});

test('Render products list', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('product-list-item')).toBeNull();
});

test('Render products list', () => {
  const { queryByTestId } = renderPage();
  expect(queryByTestId('filter-item')).toBeNull();
});

test('Show cart drawer on clicking cart basket', () => {
  const { queryByTestId } = renderPage();
  const cart = queryByTestId('cart-toggle-btn');
  fireEvent.click(cart);
  expect(queryByTestId('cart-drawer')).toBeInTheDocument();
});


