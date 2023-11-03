import React, { useEffect, useState } from "react";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getProducts } from "../../api/products";
import "./ProductPage.css";
import { getProductsByQuery } from "../../api/products";
import { FilterProduct } from "./../../components/FilterProduct/FilterProduct";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  console.log(products);

  const getProductByQuery = (query) => {
    getProductsByQuery(query).then((result) => {
      setProducts(result);
    });
  };
  return (
    <div>
      <h1>Catalog</h1>
      <SearchBar onClick={getProductByQuery} />
      {products?.products?.length > 0 && (
        <FilterProduct products={products.products} />
      )}

      {products?.products?.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};

export default ProductPage;
