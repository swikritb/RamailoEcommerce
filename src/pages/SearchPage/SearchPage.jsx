/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  getSearchProductsStatus,
  clearSearch,
} from "../../store/searchSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if (searchProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-3xl text-red-500">No Products found.</div>
      </div>
    );
  }

  return (
    <main className="bg-whitesmoke">
      <div className="container mx-auto py-5">
        <div className="title-md mb-4">
          <h3 className="text-3xl">Search results:</h3>
        </div>
        {searchProductsStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={searchProducts} />
        )}
      </div>
    </main>
  );
};

export default SearchPage;
