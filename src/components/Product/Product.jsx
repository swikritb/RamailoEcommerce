/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="bg-white rounded-lg shadow-md transition-transform hover:scale-105">
        <div className="absolute left-0 top-4 bg-orange-500 text-white text-xs capitalize py-1 px-4 rounded-tr-lg rounded-bl-lg">
          {product?.category}
        </div>
        <div className="pt-4 pb-12">
          <img
            className="w-full h-40 object-cover"
            src={product?.images[0]}
            alt={product.title}
          />
        </div>
        <div className="px-4 text-center opacity-80">
          <div className="border-b border-gray-200 pb-2 mb-2">
            <span className="font-semibold">Brand:</span> {product?.brand}
          </div>
          <div className="text-sm font-medium mb-2">{product?.title}</div>
          <div className="flex items-center justify-center">
            <span className="text-gray-500 line-through text-xs pr-1">
              {formatPrice(product?.price)}
            </span>
            <span className="text-2xl font-semibold pr-1">
              {formatPrice(product?.discountedPrice)}
            </span>
            <span className="text-sm font-semibold text-orange-500">
              ({product?.discountedPercentage}% Off)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
