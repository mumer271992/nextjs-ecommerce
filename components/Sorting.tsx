import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const SortingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
    margin-left: 1rem;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

interface Props {
  onChange: Function;
};

const Sorting: React.FC<Props> = ({ onChange }) => {
  const [state, setState] = useState({
    sortOrder: 'desc',
    sortBy: 'price'
  });
  const handleChange = ({ target }) => {
    const {name, value} = target; 
    const tmp = { ...state, [name]: value }
    setState(tmp);
    onChange(tmp);
  };
  const toggleSortOrder = () => {
    const tmp = { ...state, sortOrder: state.sortOrder === 'desc' ? 'asc' : 'desc' };
    setState(tmp);
    onChange(tmp);
  }

  return (
    <SortingWrapper data-testid="sorting-section">
      <div onClick={toggleSortOrder} style={{ cursor: 'pointer' }}>
        <Image src="/images/arrow-up.svg" alt="arrow-up" width={10} height={22} />
        <Image src="/images/arrow-down.svg" alt="arrow-down" width={10} height={22} />
        <span style={{ color: '#9b9b9b' }}>Sort By</span>
      </div>
      <select name="sortBy" onChange={handleChange}>
        <option value="price">Price</option>
        <option value="name">Name</option>
      </select>
    </SortingWrapper>
  );
};

export default Sorting;