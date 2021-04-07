import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps } from 'next'
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import Header from '../components/Header';
import FeaturedProduct from '../components/FeaturedProduct';
import Filters from '../components/Filters';
import ProductsList from '../components/ProductList';
import Sorting from '../components/Sorting';
import CartProvider from '../components/CartProvider';
import { useEffect, useState } from 'react';
import { getAllCategories, getProducts, getFeaturedProduct } from '../utils/dataGetters';

const ListingSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BreadcrumbSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  .title {
    font-size: 34px;
    font-weight: 400;
    line-height: 34px;
    @media(max-width: 480px) {
      font-size: 18px;
      line-height: 19px;
    }
  }
`;

export async function getServerSideProps(context) {
  const categories = getAllCategories(); // these are mocked api call's
  const productsData = getProducts(); // these are mocked api call's
  const featuredProduct = getFeaturedProduct(); // these are mocked api call's
  return {
    props: {
      categories,
      productsData,
      featuredProduct
    }, // will be passed to the page component as props
  }
}

export default function Home({ productsData, categories, featuredProduct }) {
  const [products, setProducts] = useState(productsData.data);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const handleSort = (sort) => {
    setSort(sort);
    const listData = getProducts(filter, sort);
    setProducts(listData.data);
  };

  const handleFilter = (filter) => {
    console.log(JSON.stringify(filter));
    setFilter({ ...filter });
    const listData = getProducts({ ...filter }, sort);
    setProducts(listData.data);
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <CartProvider>
          <Header />
          <FeaturedProduct product={featuredProduct} />
          <BreadcrumbSection data-testid="breadcrumb-section">
              <div className="title">Photographhy / <span style={{ color: '#9b9b9b' }}>Premium Photos</span></div>
              <Sorting onChange={handleSort} />
          </BreadcrumbSection>
          <ListingSection>
            <Filters categories={categories} onSelect={handleFilter} />
            {
              products && <ProductsList list={products} />
            }
          </ListingSection>
        </CartProvider>
        <style jsx>{`
          .container {
            width: 100%;
            max-width: 1280px;
            margin: auto;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Archivo', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
          .container {
            width: 100%;
            max-width: 1280px;
            margin: auto;
          }
          .d-flex {
            display: flex;
          }
          .justify-space-between {
            justify-content: space-between;
          }
          .align-items-center {
            align-items: center;
          }
          .m {
            margin: 1rem;
          }
          .m-t {
            margin-top: 1rem;
          }
          .m-b {
            margin-bottom: 1rem;
          }

          @media (max-width: 1024px) {
            .container {
              max-width: 980px;
            }
          }

          @media (max-width: 480px) {
            .container {
              width: 95% !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
