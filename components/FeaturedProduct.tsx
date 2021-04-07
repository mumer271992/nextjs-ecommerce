import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

// Local imports
import Button from './Button';
import useCart from '../utils/useCart';

const FeaturedProductWrapper = styled.div`
  margin-top: 9.5rem;
  border-bottom: 4px solid #e4e4e4;

  .hero-section {
    position: relative;
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      .add-to-cart-action {
        @media(max-width: 480px) {
          display: none;
        }
      }
    }
  }
  .add-to-cart-action-mobile {
    width: 100%;
    display: none;
    margin-top: 30px;
    @media(max-width: 480px) {
      display: block;
    }
  }
  .details-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 0;
    @media(max-width: 480px) {
      flex-direction: column;
    }
    .description-section {
      width: 55%;
      @media(max-width: 480px) {
        width: 100%;
      }
      .category {
        font-size: 22px;
        font-weight: 700;
        line-height: 24px;
        color: #656565;
      }
      .description {
        font-size: 29px;
        font-weight: 400;
        line-height: 43px;
        color: #656565;
      }
    }
    .meta {
      @media(max-width: 480px) {
        margin-top: .5rem;
      }
      .products {
        img {
          width: 120px;
          margin-right: 0.5rem !important;
          :last-child {
            margin-right: 0px !important;
          }
          @media(max-width: 480px) {
            width: 110px;
          }
        }
      }
    }
  }
  .title {
    font-size: 32px;
    font-weight: 700;
    line-height: 34px;
  }
`;

const FeaturedLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 279px;
  font-size: 20px;
  line-height: 21px;
  padding: 1.25rem 2.5rem;
  background: #ffffff;
  color: #000000;
`;

interface Props {
  product: any;
};

const FeaturedProduct: React.FC<Props> = ({ product }) => {
  const { addItemToCart } = useCart();

  return (
    <FeaturedProductWrapper data-testid="featured-product">
      <div className="hero-section">
        <div className="top-bar">
          <div className="title">{product?.name}</div>
          <div style={{ width: '260px'}} className="add-to-cart-action">
            <Button textTransform="uppercase" data-testid="featured-product-add-to-cart-btn" onClick={() => addItemToCart(product)}>Add To Cart</Button>
          </div>
        </div>
        {
          product?.image?.src && (
            <Image
              src={product?.image?.src || ''}
              layout="responsive"
              alt="featured-banner"
              width={1276}
              height={738}
            />
          )
        }
        {
          product.featured && <FeaturedLabel>Photo of the day</FeaturedLabel>
        }
      </div>
      <div className="add-to-cart-action-mobile">
        <Button textTransform="uppercase" onClick={() => addItemToCart(product)}>Add To Cart</Button>
      </div>
      <div className="details-section">
        <div className="description-section">
          <div className="title">About the {product?.name}</div>
          <div className="category m-t">{product?.category}</div>
          <div className="description m-t">{product?.description}</div>
        </div>
        <div className="meta">
          <div className="title">
            People also buy
          </div>
          {
            product?.recommendations?.length && (
              <div className="products m-t">
                <img src={product?.recommendations[0].src || ''} alt="" />
                <img src={product?.recommendations[1].src || ''} alt="" />
                <img src={product?.recommendations[2].src || ''} alt="" />
              </div>
            )
          }
        </div>
      </div>
    </FeaturedProductWrapper>
  );
};

export default FeaturedProduct;