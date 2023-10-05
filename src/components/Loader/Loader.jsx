import { loader } from "../../utils/images";

const Loader = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="loader flex justify-center align-center">
        <img src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;
