import Logo from "../utils/Logo";
import { LuSearch } from "react-icons/lu";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { cn } from "../../utils/cn";
import { useState } from "react";
import { Badge } from "@nextui-org/react";

const Navbar = () => {
  const [inputScale, setInputScale] = useState("");
  const [iconDivDisplayStyle, setIconDivDisplayStyle] = useState("");
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className="z-[100] shadow-xl bg-primary-color min-h-10 fixed  w-full">
        <div className="container max-w-[1175px] mx-auto flex justify-between items-center max-xl:px-5 py-5 ">
          <div className="max-sm:mr-5 max-lg:mr-10 lg:mr-20 xl:mr-28 2xl:mr-36 ">
            <Logo />
          </div>
          <div className="flex-1 ">
            <div
              onMouseEnter={() => {
                setIconDivDisplayStyle("max-sm:-mr-[120px]");
                setInputScale("max-sm:scale-x-100");
              }}
              onMouseLeave={() => {
                if (!focus) {
                  setIconDivDisplayStyle("");
                  setInputScale("max-sm:scale-x-0");
                }
              }}
              className={`${
                inputScale && iconDivDisplayStyle ? "" : "max-sm:w-min"
              } relative duration700 max-w-[600px] mx-auto  delay700`}
            >
              <div
                onClick={() => {
                  inputScale && iconDivDisplayStyle
                    ? ""
                    : setIconDivDisplayStyle("max-sm:-mr-[120px]");
                  setInputScale("max-sm:scale-x-100");
                }}
                className="absolute h-full w-28 rounded-lg bg-primary-color active:scale-90 duration-300 cursor-pointer border-1 right-0 bottom-0 flex items-center justify-center text-2xl font-medium text-white z-10"
              >
                <LuSearch />
              </div>
              <input
                onFocus={() => {
                  setFocus(true);
                  setIconDivDisplayStyle("max-sm:-mr-[120px]");
                  setInputScale("max-sm:scale-x-100");
                }}
                onBlur={() => {
                  setFocus(false);
                  setIconDivDisplayStyle("");
                  setInputScale("max-sm:scale-x-0");
                }}
                placeholder="Search here..."
                className={cn(
                  "max-sm:scale-x-0 w-full rounded-lg p-2 lg:p-3 lg:pr-32 pr-[118px] z-[5] duration-700 text-lg lg:text-xl focus:outline-none",
                  inputScale
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              "flex gap-2 sm:gap-6 lg:gap-10  max-lg:ml-10 lg:ml-20 xl:ml-28 2xl:ml-36 justify-end  duration-700",
              iconDivDisplayStyle
            )}
          >
            <div className="active:scale-95 bg-white rounded-[50%] p-2 sm:p-3 lg:p-4 duration-100 cursor-pointer hover:text-primary-color">
              <FaHeart className="text-xl lg:text-2xl  duration-100 " />
            </div>
            <Badge
              content="0"
              placement="top-left"
              shape="circle"
              className="bg-secondary-color border-none font-medium text-white"
            >
              <div className="active:scale-95 bg-white rounded-[50%] p-2 sm:p-3 lg:p-4 duration-100 cursor-pointer hover:text-primary-color">
                <FaShoppingCart className="text-xl  lg:text-2xl duration-100 " />
              </div>
            </Badge>
          </div>
        </div>
      </div>
      <div className="bg-transparent h-[84px] lg:h-[96px] "></div>
    </>
  );
};

export default Navbar;
