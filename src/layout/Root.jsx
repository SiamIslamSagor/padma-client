import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
