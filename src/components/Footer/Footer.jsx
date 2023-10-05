import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold">More about Swikrit Shop</h2>
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-[#d23d3d] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-[#333333] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-[#1877F2] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-[#0077B5] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Shop</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Accessories
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Clothes
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Electronics
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Home appliances
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              New Arrivals
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Your account</h2>
          <ul className="flex flex-col gap-2">
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
            <li className="text-base text-lightText hover:text-black hover:underline hover:decoration-[1px] hover:decoration-gray-500 hover:underline-offset-2 cursor-pointer duration-300">
              Payment Options
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <h2 className="text-2xl font-semibold">
            Subscribe to our newsletter.
          </h2>
          <div className="w-full">
            <p className="text-center mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p>
          </div>
          <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
            <div className="flex flex-col w-full">
              <input
                className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                type="text"
                placeholder="Insert your email ...*"
              />

              <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2"></p>
            </div>
            <button className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
