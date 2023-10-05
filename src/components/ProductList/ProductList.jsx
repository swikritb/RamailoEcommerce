/* eslint-disable react/prop-types */

import Product from "../Product/Product";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 bg-whitesmoke my-3">
      {products.map((product) => {
        const discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
};

export default ProductList;
