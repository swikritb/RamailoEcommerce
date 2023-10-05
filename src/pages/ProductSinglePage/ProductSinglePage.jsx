import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa";

import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../../store/productSlice";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../store/cartSlice";
import CartMessage from "../../components/CartMessage/CartMessage";
import Loader from "../../components/Loader/Loader";
import { formatPrice } from "../../utils/helpers";
import { STATUS } from "../../utils/status";

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  // Getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartMessageStatus]);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    const discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    const totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({
        ...product,
        quantity: quantity,
        totalPrice,
        discountedPrice,
      })
    );
    dispatch(setCartMessageOn(true));
  };

  return (
    <main className="py-5 bg-whitesmoke">
      <div className="max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:flex justify-center items-center">
            <div className="max-w-xs w-full md:max-w-md">
              <div className="relative">
                <img
                  src={product ? (product.images ? product.images[0] : "") : ""}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="md:mt-0">
            <div className="font-manrope">
              <div className="text-2xl font-semibold mb-2">
                {product?.title}
              </div>
              <p className="text-gray-600">{product?.description}</p>
              <div className="flex flex-wrap items-center text-sm mt-4">
                <div className="flex items-center text-orange">
                  Rating: <span className="mx-1">{product?.rating}</span>
                </div>
                <div className="mx-2 vert-line"></div>
                <div className="text-orange">
                  Brand: <span className="mx-1">{product?.brand}</span>
                </div>
                <div className="mx-2 vert-line"></div>
                <div className="text-orange">
                  Category:{" "}
                  <span className="mx-1 text-capitalize">
                    {product?.category
                      ? product.category.replace("-", " ")
                      : ""}
                  </span>
                </div>
              </div>

              <div className="bg-gray-100 p-4 mt-4">
                <div className="flex items-center">
                  <div className="text-gray-500 line-through">
                    {formatPrice(product?.price)}
                  </div>
                  <span className="text-sm mx-2 text-gray-700">
                    Inclusive of all taxes
                  </span>
                </div>

                <div className="flex items-center my-2">
                  <div className="text-orange font-semibold text-xl">
                    {formatPrice(
                      product?.price -
                        product?.price * (product?.discountPercentage / 100)
                    )}
                  </div>
                  <div className="bg-orange-600 text-white font-semibold text-sm px-2 py-1 ml-2">
                    {product?.discountPercentage}% OFF
                  </div>
                </div>
              </div>

              <div className="flex items-center my-4">
                <div className="mr-3">Quantity:</div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300"
                    onClick={decreaseQty}
                  >
                    <FaMinus />
                  </button>
                  <div className="w-12 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    type="button"
                    className="w-8 h-8 flex items-center justify-center border border-gray-300"
                    onClick={increaseQty}
                  >
                    <FaPlus />
                  </button>
                </div>
                {product?.stock === 0 && (
                  <div className="bg-danger text-white text-xs uppercase px-2 py-1 ml-2 font-semibold rounded">
                    Out of stock
                  </div>
                )}
              </div>

              <div className="btns">
                <button
                  type="button"
                  className="btn bg-gray-200 p-2 ml-3 "
                  onClick={() => {
                    addToCartHandler(product);
                  }}
                >
                  <span className="btn-text ml-3">Add to cart</span>
                </button>
                <button
                  type="button"
                  className="btn bg-gray-600 text-white ml-3 p-2"
                >
                  <span className="btn-text">Buy now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cartMessageStatus && <CartMessage />}
    </main>
  );
};

export default ProductSinglePage;
