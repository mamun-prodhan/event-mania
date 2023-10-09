import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto relative">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="absolute bottom-[-1] w-[100%]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
