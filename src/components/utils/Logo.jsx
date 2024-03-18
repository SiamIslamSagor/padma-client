import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
        PADMA
      </h3>
    </Link>
  );
};

export default Logo;
