import React from "react";
export const FilterProduct = (props) => {
  const { products } = props;
  console.log("products", products);
  return (
    <>
      <FilterProductCategory products={products} />
      <FilterProductBrand products={products} />
    </>
  );
};

export const FilterProductBrand = (props) => {
  const { products } = props;
  const uniqueProductList = [
    ...new Set(
      products.map((product) => {
        return product.brand;
      })
    ),
  ];
  return (
    <>
      <label class="form-check-label">Brand:</label>
      {uniqueProductList.map((product) => {
        return (
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label">{product}</label>
          </div>
        );
      })}
    </>
  );
};

export const FilterProductCategory = (props) => {
  const { products } = props;
  const uniqueProductList = [
    ...new Set(
      products.map((product) => {
        return product.category;
      })
    ),
  ];
  const options = uniqueProductList.map((item) => {
    return {
      title: item,
      value: item,
    };
  });
  return (
    <select className="form-select">
      {options.map((option) => {
        return (
          <>
            <option value={option.value}>{option.title}</option>
          </>
        );
      })}
    </select>
  );
};
