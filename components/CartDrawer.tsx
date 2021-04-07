import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from './Button';
import useCart from '../utils/useCart';

const CartDrawerWrapper = styled.div`
  min-height: 120px;
  position: absolute;
  right: 0;
  top: 75px;
  width: 440px;
  border: 4px solid #e4e4e4;
  background: #ffffff;
  z-index: 5;
  img {
    cursor: pointer;
  }
  @media (max-width: 480px) {
    right: -8px;
    width: 370px;
    height: calc(100vh - 116px);
    max-height: calc(100vh - 116px);
  }
  .content {
    max-height: 320px;
    overflow-y: auto;
    padding: 1rem;
    background: #ffffff;
    margin-bottom: 4rem;
  }
  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    background: #ffffff;
  }
`;

const CartDrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: #ffffff;
`;

const CartDrawerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 1rem 0;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 20px;
    line-height: 21px;
    margin-bottom: 1rem;
  }
  .price {
    font-size: 29px;
    font-weight: 400;
    line-height: 31px;
    color: #656565;
  }
  img {
    cursor: pointer;
    object-fit: cover;
  }
`;

const EmptyDrawer = styled.div`
  text-align: center;
  color: #9b9b9b;
  padding: 1rem 0;
`;

interface Props {
  cartList: any[];
  toggle: Function;
};

const CartDrawer: React.FC<Props> = ({ cartList, toggle }) => {
  const { clearCart } = useCart();
  return (
    <CartDrawerWrapper data-testid="cart-drawer">
      <CartDrawerHeader>
        <Image data-testid="cart-drawer-cross" src="/images/cross.svg" alt="" width={25} height={25} onClick={() => toggle()} />
      </CartDrawerHeader>
      <div className="content">
        {
          cartList?.length ? 
          cartList.map((item: any) => <CartDrawerItem>
            <div>
              <div className="title">{item?.name}</div>
              <div className="price">${item?.price}</div>
            </div>
            <Image src={item?.image?.src} alt="" width={149} height={86} />
          </CartDrawerItem>) : <EmptyDrawer>No item added in cart</EmptyDrawer>
        }
      </div>
      <div className="footer">
        <Button outline={true} onClick={clearCart}>CLEAR</Button>
      </div>
    </CartDrawerWrapper>
  );
};

export default CartDrawer;