import React, { useState } from 'react';
import styled from 'styled-components';

// Local imports

import Checkbox from './Checkbox';

const FilterWrapper = styled.div`
  width: 20%;
  .title {
    font-size: 32px;
    font-weight: 700;
    line-height: 34px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const CategoryWrapper = styled.div`
  border-bottom: 1px solid #e4e4e4;
  .title {
    margin-bottom: 2.5rem;
  }
`;

const PriceRangeWrapper = styled.div`
  .title {
    margin-bottom: 2.5rem;
  }
`;

interface Props {
  categories: any[]
  onSelect: Function
};

const Filters: React.FC<Props> = ({ categories, onSelect }) => {
  const [filter, setFilter] = useState<any>({ categories: [], priceRange: {}});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const priceFilters = [
    {
      id: 1,
      label: "Lower than $20",
      max: 20,
    },
    {
      id: 2,
      label: "$20 - $100",
      max: 100,
      min: 20,
    },
    {
      id: 3,
      label: "$100 - $200",
      max: 100,
      min: 200,
    },
    {
      id: 4,
      label: "More than $200",
      min: 200,
    }
  ];

  const handleChangeCategory = (value, checked) => {
    const find = filter.categories.find(item => item === value);
    let tmp = [];
    if (checked) {
      if (!find) {
        tmp = [...filter.categories, value];
      }
    } else {
      tmp = filter.categories.filter(item => item !== value);
    }
    const tmpFilter = { ...filter, categories: [...tmp] }
    setFilter(tmpFilter);
    console.log("Temp: ", tmp);
    onSelect(tmpFilter);
  }

  const handlePriceCategory = (data, checked) => {
    const tmpFilter = { ...filter, priceRange: checked ? data : {} }
    setFilter(tmpFilter);
    onSelect(tmpFilter);
  }

  return (
    <FilterWrapper data-testid="filters">
      <CategoryWrapper>
        <div className="title">Category</div>
        {
          categories.map((category: any, index) => <Checkbox key={index} data-testid="filter-item" label={category} onChange={(event: any) => handleChangeCategory(category.toLowerCase(), event.target.checked)} />)
        }
      </CategoryWrapper>
      <PriceRangeWrapper>
        <div className="title">Price range</div>
        {
          priceFilters.map((priceFilter: any, index: number) => <Checkbox key={index} label={priceFilter.label} checked={priceFilter.id === filter?.priceRange?.id} onChange={(event: any) => handlePriceCategory(priceFilter, event.target.checked)} />)
        }
      </PriceRangeWrapper>
    </FilterWrapper>
  )
};

export default Filters;