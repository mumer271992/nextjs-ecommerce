import categories from '../mockData/categories.json';
import products from '../mockData/products.json';

export const getAllCategories = () => {
  // TODO: implement proper api and use this method to get data from actual api
  return categories;
};

const handleSort = (data, sort) => {
  const tmpList = [...data];
  if (sort.sortOrder === 'asc') {
    tmpList.sort( function ( a, b ) { return a[sort.sortBy] - b[sort.sortBy]; } );
  } else if (sort.sortOrder === 'desc') {
    tmpList.sort( function ( a, b ) { return b[sort.sortBy] - a[sort.sortBy]; } );
  }
  return tmpList;
};

const handleFilteration = (data, filter) => {
  let tmp = [...data];
  // Filter by selected categories
  if (filter?.categories?.length) {
    tmp = tmp.filter(item => {
      const find = filter.categories.find(category => category === item.category);
      return find ? true : false;
    });
  }
  // Filter by selected price
  
  if (filter?.priceRange?.min && filter?.priceRange?.max) {
    tmp = tmp.filter(item => item.price >= filter.priceRange.min && item.price <= filter.priceRange.max);
  } else if (filter?.priceRange?.min && !filter?.priceRange?.max) {
    tmp = tmp.filter(item => item.price >= filter.priceRange.min);
  } else if (!filter?.priceRange?.min && filter?.priceRange?.max) {
    tmp = tmp.filter(item => item.price <= filter.priceRange.max);
  }
  return tmp;
}


export const getProducts = (filter?: any, sort?: any, page?: number) => {
  const pageSize = 4;
  console.log("Filter: ", filter);
  console.log("Sort: ", sort);
  let data = [...products];
  if (filter?.categories?.length || filter?.priceRange) {
    data = handleFilteration(data, filter);
  }
  if (sort?.sortOrder, sort?.sortBy) {
    data = handleSort(data, sort);
  }
  const start = (page - 1) * pageSize;
  data = data.slice(start, pageSize);
  const response = {
    data,
    count: data.length
  }
  return response;
};

export const getFeaturedProduct = () => {
  const featuredProduct = products.find(product => product.featured);
  return featuredProduct;
};
