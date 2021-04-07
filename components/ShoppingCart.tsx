import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from './Button';
import CartDrawer from './CartDrawer';
import useCart from '../utils/useCart';

const ShoppingCartWrapper = styled.div`
  position: relative;
  .cart-icon {
    cursor: pointer;
  }
`;

const ItemsCount = styled.span`
  font-size: 20px;
  line-height: 21px;
  background-color: #000000;
  color: #ffffff;
  padding: 0 .5rem;
`;

interface Props {};

const ShoppingCart: React.FC<Props> = () => {
  const { items, showDrawer, hideDrawer, openDrawer } = useCart();
  const toggle = () => {
    if (showDrawer) {
      hideDrawer();
    } else {
      openDrawer();
    }
  }
  return (
    <ShoppingCartWrapper data-testid="shopping-cart">
      <div data-testid="cart-toggle-btn" className="cart-icon" onClick={toggle}>
        <Image
          data-testid="cart-icon"
          src="/images/shopping-cart.svg"
          alt="logo"
          width={54}
          height={54}
        />
        {
          items?.length ? <ItemsCount>{items.length}</ItemsCount> : ''
        }
      </div>
      {
        showDrawer && (
          <CartDrawer cartList={items} toggle={() => hideDrawer()} />
        )
      }
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;