import * as React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 0 1.65rem;
  border-bottom: 4px solid #e4e4e4;
`;

// Local imports

import ShoppingCart from './ShoppingCart';

interface Props {};

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer data-testid="header-container">
      <div className="container">
        <HeaderWrapper>
          <Image
            id="logo"
            src="/images/logo.svg"
            alt="logo"
            width={159}
            height={25}
          />
          <ShoppingCart />
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  );
};

export default Header;