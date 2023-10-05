// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";

// const Sidebar = () => {
//   const dispatch = useDispatch();
//   const isSidebarOn = useSelector(getSidebarStatus);

//   return (
//     <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
//       <button
//         type="button"
//         className="sidebar-hide-btn"
//         onClick={() => dispatch(setSidebarOff())}
//       ></button>
//     </aside>
//   );
// };

// export default Sidebar;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";
import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform ${
        isSidebarOn ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out z-50`}
    >
      <button
        type="button"
        className="absolute top-4 right-4 text-gray-500 hover:text-orange-500"
        onClick={() => dispatch(setSidebarOff())}
      >
        <IoClose className="w-6 h-6" />
      </button>
      <div className="p-8">
        <div className="text-xl font-semibold uppercase mb-4">
          All Categories
        </div>
        <ul className="space-y-2">
          {categories.map((category, idx) => {
            return (
              <li
                key={idx}
                className="flex items-center"
                onClick={() => dispatch(setSidebarOff())}
              >
                <Link
                  to={`category/${category}`}
                  className="text-lg text-gray-700 hover:text-orange-500"
                >
                  {category.replace("-", " ")}
                </Link>
              </li>
            );
          })}

          {/* {categories.map((category, idx) => (
            <li
              key={idx}
              onClick={() => dispatch(setSidebarOff())}
              className="flex items-center"
            >
              <Link
                to={`category/${category}`}
                className="text-lg text-gray-700 hover:text-orange-500"
              >
                {category.replace("-", " ")}
              </Link>
            </li>
          ))} */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
