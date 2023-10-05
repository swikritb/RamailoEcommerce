import { correct } from "../../utils/images";

const CartMessage = () => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-8 rounded-md text-center text-white">
      <div className="mb-6">
        <img src={correct} alt="" className="w-12 h-12 mx-auto" />
      </div>
      <h6 className="text-sm font-medium">
        An item has been added to your shopping cart
      </h6>
    </div>
  );
};

export default CartMessage;
