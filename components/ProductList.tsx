import *as React from 'react';
import styled from 'styled-components';

// local imports

import ProductListItem from './ProductListItem';

const ProductListWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

interface Props {
  list: any[]
};

const ProductList: React.FC<Props> = ({ list }) => {
  return (
    <ProductListWrapper>
      {
        list?.length ? list.map((product: any, index: number) => <ProductListItem key={index} product={product} />) : <div>No items found</div>
      }
    </ProductListWrapper>
  );
};

export default ProductList;