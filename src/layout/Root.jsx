import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden bg-[#F8F9FA]">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
