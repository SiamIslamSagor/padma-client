import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
