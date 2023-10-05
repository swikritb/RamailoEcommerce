/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";
import { getCartItemsCount } from "../../store/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsCount = useSelector(getCartItemsCount);
  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="py-3">
      <div className="flex items-center ">
        <div className="flex items-center gap-10">
          <button
            type="button"
            className="mr-3 mt-1 text-black transition ease-in duration-700
             hover:opacity-90"
            onClick={() => dispatch(setSidebarOn())}
          >
            <FaBars />
          </button>
          <Link to="/" className="flex items-center text-2xl">
            <span className="text-orange-500"></span>
            <BiShoppingBag />
            <span className="mx-2 font-bold">Swikrit Store.</span>
          </Link>
        </div>

        <div className="flex-grow">
          <div className="bg-white rounded-md shadow-md p-1 ml-8">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-grow p-2 text-base text-black placeholder-gray-800 focus:outline-none"
                placeholder="Search your preferred items here"
                onChange={(e) => handleSearchTerm(e)}
              />
              <Link
                to={`/search/${searchTerm}`}
                className="text-black text-lg flex items-center justify-center p-4
                "
              >
                <FaSearch />
              </Link>
            </div>
          </div>

          <ul className="flex items-center text-sm font-medium font-manrope mt-2 ml-8">
            {categories.slice(0, 8).map((category, idx) => (
              <li className="mr-4" key={idx}>
                <Link
                  to={`category/${category}`}
                  className="capitalize text-black"
                >
                  {category.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-9 h-14 ">
          <Link to="/cart" className="relative text-black">
            <FaShoppingCart classname="relative" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
