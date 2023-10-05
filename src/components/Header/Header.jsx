import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="w-full bg-[#F5F5F3] py-5 ">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-bottom flex ml-9">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
