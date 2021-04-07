import *as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import useCart from '../utils/useCart';

const ProductListItemrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;

  .product-image {
    position: relative;
    width: 420px;
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .add-to-cart-bar {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 130px;
    display: none;
    background-color: #000000;
    color: #ffffff;
    font-size: 23px;
    line-height: 25px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    @media (max-width: 480px) {
      display: block;
    }
  }
  &:hover {
    .add-to-cart-bar {
      display: block;
    }
  }
`;

const ProductName = styled.div`
  font-size: 34px;
  line-height: 36px;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 29px;
  line-height: 31px;
  font-weight: 400;
  font-family: Archivo;
  color: #656565;
`;

const ProductCategory = styled.div`
  font-size: 22px;
  line-height: 23px;
  font-weight: bold;
  font-family: Archivo;
  color: #656565;
  margin-top: 1.2rem;
  text-transform: capitalize;
`;

const BestSeller = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
  line-height: 21px;
  font-weight: 400;
  text-transform: capitalize;
  background-color: #ffffff;
  color: #000000;
  padding: 0.5rem 2rem;
`;

interface Props {
  product: any
};

const ProductListItem: React.FC<Props> = ({ product }) => {
  const { addItemToCart } = useCart();
  return (
    <ProductListItemrapper data-testid="product-list-item">
      { product?.image?.src && <img className="product-image" src={product.image.src} alt="" />}
      <div className="add-to-cart-bar" onClick={() => addItemToCart(product)}>Add To Cart</div>
      <ProductCategory>{product.category}</ProductCategory>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      {
        product.bestseller && <BestSeller>Best Seller</BestSeller>
      }
    </ProductListItemrapper>
  );
};

export default ProductListItem;