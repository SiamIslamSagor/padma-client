import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
