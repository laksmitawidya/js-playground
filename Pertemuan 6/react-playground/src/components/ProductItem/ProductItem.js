const ProductItem = ({ product }) => {
  return (
    <div key={product.id}>
      <img src={product.thumbnail} alt="img error"></img>
      <div>{product.title}</div>
      <div>{product.brand}</div>
      <div>{product.category}</div>
      <div>{product.discountPercentage}%</div>
    </div>
  );
};
export default ProductItem;
