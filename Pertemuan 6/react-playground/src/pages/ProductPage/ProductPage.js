import SearchBar from "../../components/SearchBar/SearchBar";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts, searchProducts } from "../../api/api";

const ProductPage = () => {
  // state nya apa, dan cara nyimpennya gmn
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result.products);
    });
  }, []);

  const onSearch = (query) => {
    searchProducts(query).then((result) => {
      setProducts(result.products);
    });
    // const filteredProduct = products.filter((product) => {
    //   return product.title.toLowerCase().includes(query.toLowerCase());
    // });
    // setProducts(filteredProduct);
  };

  return (
    <>
      <h1>Catalog</h1>
      <SearchBar onClick={onSearch} />
      {products.map((product, id) => {
        return <ProductItem key={id} product={product} />;
      })}
    </>
  );
};

export default ProductPage;
